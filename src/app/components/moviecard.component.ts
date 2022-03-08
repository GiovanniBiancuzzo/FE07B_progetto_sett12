import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-moviecard',
  template: `
  <style>
      .example-card {
        max-width: 300px;

      }


    </style>

    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image">
        <img
        mat-card-image
        src= "http://image.tmdb.org/t/p/w500{{movie.backdrop_path}}"
      />
        </div>
        <mat-card-title>{{ movie.title }}</mat-card-title>
        <mat-card-subtitle>{{ movie.release_date }}</mat-card-subtitle>
      </mat-card-header>
      <img [routerLink]="['/movies',movie.id]" routerLinkActive="router-link-active"
        mat-card-image
        src= "http://image.tmdb.org/t/p/w500{{movie.poster_path}}"
      />


      <mat-card-actions>
        <button (click)="favToggle()" mat-button>
          <mat-icon
            color="accent"
            aria-hidden="false"
            aria-label="Example home icon"
            >favorite_border</mat-icon
          >Mi piace
        </button>
        <!-- aggiungi pulsante cuore pieno al click -->
      </mat-card-actions>
      <ng-content></ng-content>
    </mat-card>

  `,
  styles: [],
})
export class MoviecardComponent implements OnInit {

  @Input() movie!: Movie;


  constructor() {}

  ngOnInit(): void {}

  favToggle() {
    //heart = favorite ? (favorite) : (favorite_border)


    //if (this.heart) {
    //  this. = favorite;
    //}
    //else this. = favorite_border;
  }
}
