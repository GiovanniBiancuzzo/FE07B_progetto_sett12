import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../../navigation.service';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"],
})
export class LoginPage implements OnInit {
  hide = true;
  isLoading = false;


  constructor(
    private authSrv: AuthService,
    private router: Router,
    private navService: NavigationService
  ) {}

  ngOnInit(): void {}

  async onLogin(form: NgForm) {
    this.isLoading = true;
    try {
      await this.authSrv.login(form.value).toPromise();
      this.isLoading = false;

      this.router.navigate(['/movies']);
    } catch (error) {
      this.isLoading = false;
      form.reset();
      alert(error);
      console.error(error);
    }
  }

  goToSignUp() {
    this.navService.toSignUp();
  }
}
