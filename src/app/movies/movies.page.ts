import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from '../models/movie';

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

    <div class="movies-container">
      <div class="movie-box" *ngFor="let movie of movies">
        <app-moviecard [movie]="movie"></app-moviecard>
      </div>
    </div>
  `,
  styles: [],
})
export class MoviesPage implements OnInit {
  movies!: Movie[];

  constructor(private movieSrv: MoviesService) {}

  async ngOnInit() {
    //: Promise<void>
    //creare card per film
    //recuperare lista film
    const getMovies = await this.movieSrv.getMovies().toPromise();
    this.movies = getMovies;
  }
}
