import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies!: Movie;
  moviesUrl = "http://localhost:4201/movies-popular"

  constructor(private http: HttpClient) {}

  getMovies() {//recupero array di oggetti film dall'api
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number) {//recupero array di oggetti film dall'api
    return this.http.get<Movie>(`${this.moviesUrl}/${id}`);
  }

  //favourites(userId: number, movieId: number) {
  //  localStorage.get()
  //}
}
