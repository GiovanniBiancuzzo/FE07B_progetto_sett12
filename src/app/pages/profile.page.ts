import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { NavigationService } from '../navigation.service';

@Component({
  template: `
    <style>
      .example-card {
        max-width: 400px;
        margin: 30px auto;
      }
      mat-card-title {
        margin-bottom: 20px;
      }
    </style>

    <mat-card class="example-card">
      <mat-card-title-group>
        <mat-card-title>{{ user.user.name | firstuppercase}} {{ user.user.surname | firstuppercase}}</mat-card-title>
        <mat-card-subtitle>{{ user.user.email }}</mat-card-subtitle>
        <mat-icon mat-card-avatar color="accent" aria-hidden="false" aria-label="Example profile icon">account_circle</mat-icon>
      </mat-card-title-group>
      <mat-card-content>
        <p>Ciao {{ user.user.name | firstuppercase}}, hai {{ n }} film preferiti.</p>
      </mat-card-content>
      <mat-card-actions>
        <button [routerLink]="['/favourites']" mat-button>Vai ai preferiti</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [],
})
export class ProfilePage implements OnInit {
  @Input() user!: User;

  n = 4;
  //user = {
  //  user: {
  //    email: 'giovanni@gmail.com',
  //    id: 3,
  //    name: 'giovanni',
  //    surname: 'biancuzzo',
  //  },
  //};

  constructor(private navSrv: NavigationService) {}

  ngOnInit(): void {}

}
