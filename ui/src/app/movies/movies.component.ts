import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies: any[];

  constructor(private http: Http) { }

  // private instance variable to hold base url
  private movieUrl = 'http://localhost:4200/api/getAllCurrentMovies';

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): any {
    return this.http.get(this.movieUrl).subscribe(res => {
      this.movies = res.json();
      console.log(this.movies);
    });
  }
}
