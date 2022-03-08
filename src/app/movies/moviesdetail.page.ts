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
  }

  favToggle() {
    //heart = favorite ? (favorite) : (favorite_border)
    //if (this.heart) {
    //  this. = favorite;
    //}
    //else this. = favorite_border;
  }
}
