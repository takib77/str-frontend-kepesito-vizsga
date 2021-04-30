import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';
  apiUrl: string = 'https://tr360-frontend-exam-april.azurewebsites.net/takib77/movies';

  list$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(): void {
    this.http.get<Movie[]>(this.apiUrl).subscribe(
      movies => this.list$.next(movies)
    );
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiUrl}/${id}`);
  }
}
