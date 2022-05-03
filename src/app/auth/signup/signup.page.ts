import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: "signup.page.html",
  styleUrls: ["signup.page.scss"],
})
export class SignupPage implements OnInit {
  hide = true;
  isLoading = false;
  isLoggedIn = false;
  constructor(
    private authSrv: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  async onsubmit(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
      await this.authSrv.signup(form.value).toPromise();
      this.router.navigate(['/login']);
      this.isLoading = false;
    } catch (error) {
      console.error(error);
      form.reset();
      this.isLoading = false;
    }
  }
}
