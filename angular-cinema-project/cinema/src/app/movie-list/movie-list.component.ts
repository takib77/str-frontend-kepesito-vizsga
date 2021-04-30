import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Observable<Movie[]> = this.service.list$;

  constructor(
    private service: HttpService
  ) { }

  ngOnInit(): void { }

  getMovies(): void {
    this.service.getMovieList();
  }

  deleteMovie(id: number): void {
    this.service.deleteMovie(id).subscribe(
      () => {
        this.service.getMovieList();
      });
  }

}
