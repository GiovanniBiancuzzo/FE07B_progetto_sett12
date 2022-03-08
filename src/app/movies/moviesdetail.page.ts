import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MoviesService } from './movies.service';

@Component({
  template: `
    <style>
      .movies-container {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
      }
      .movie-box {
        padding: 20px;
      }
    </style>
    <!--
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
      <img
        mat-card-image
        src= "http://image.tmdb.org/t/p/w500{{movie.poster_path}}"
      />
      <mat-card-content>
        <p>
          {{ movie.overview }}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button (click)="favToggle()" mat-button>
          <mat-icon
            color="accent"
            aria-hidden="false"
            aria-label="Example home icon"
            >favorite_border</mat-icon
          >Mi piace
        </button>
        aggiungi pulsante cuore pieno al click
      </mat-card-actions>
      <ng-content></ng-content>
    </mat-card> -->

    <ng-container *ngIf="movie; else elseTemplate">
      <div class="movies-container">
        <div class="movie-box">
          <app-moviecard [movie]="movie">
            <mat-card-content>
              <p>
                {{ movie.overview }}
              </p>
            </mat-card-content>
          </app-moviecard>
        </div>
      </div>
    </ng-container>
    <ng-template #elseTemplate>
      <p>Film non trovato</p>
    </ng-template>
  `,
  styles: [],
})
export class MoviesdetailPage implements OnInit {
  movie!: Movie;

  constructor(
    private router: ActivatedRoute,
    private movieSrv: MoviesService
  ) {}

  async ngOnInit() {
    //: Promise<void>
    //creare card per film
    //recuperare lista film
    this.router.params.subscribe(async (params) => {
      const id = +params['id'];
      this.movie = await this.movieSrv.getMovie(id).toPromise();
    });

    //const getMovies = await this.movieSrv.getMovie(id).toPromise();
    //this.movie = getMovies;
  }

  favToggle() {
    //heart = favorite ? (favorite) : (favorite_border)
    //if (this.heart) {
    //  this. = favorite;
    //}
    //else this. = favorite_border;
  }
}
