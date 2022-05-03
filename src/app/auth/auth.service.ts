import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserAuth } from '../models/user-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  url = 'http://localhost:4201';
  private authSubj = new BehaviorSubject<null | UserAuth>(null);

  user$ = this.authSubj.asObservable();
  timeoutLogout: any;

  constructor(private http: HttpClient, private router: Router) {
    this.restore();
  }

  login(data: { email: string; password: string }) {
    return this.http.post<UserAuth>(`${this.url}/login`, data).pipe(
      tap((data) => {
        console.log(data);
        this.authSubj.next(data);
        localStorage.setItem('user', JSON.stringify(data));
        this.autoLogout(data)
      })
    );
  }
  restore() {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const userdata: UserAuth = JSON.parse(user);
    if (this.jwtHelper.isTokenExpired(userdata.accessToken)) {
      return;
    }
    this.authSubj.next(userdata);

    this.autoLogout(userdata);
  }

  signup(data: { name: string; email: string; password: string }) {
    return this.http.post(`${this.url}/signup`, data);
  }

  logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if (this.timeoutLogout) {
      clearTimeout(this.timeoutLogout);
    }
  }

  autoLogout(data: UserAuth) {
    const exDate = this.jwtHelper.getTokenExpirationDate(
      data.accessToken
    ) as Date;
    const exMs = exDate.getTime() - new Date().getTime();
    this.timeoutLogout = setTimeout(() => {
      this.logout();
    }, exMs);
  }
}
