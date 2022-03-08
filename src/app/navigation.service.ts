import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  toLogin() {
    this.router.navigate(['/login']);
  }

  toSignUp() {
    this.router.navigate(['/signup']);
  }

  toFavourites() {
    this.router.navigate(['/favourites']);
  }
}
