import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addMovies',
  templateUrl: './addMovies.component.html',
  styleUrls: ['./addMovies.component.css']
})
export class AddMoviesComponent implements OnInit {

  movie: any = {
  };

  generes = [
    "horror", "komedia", "thriller", "film akcji", "film romantyczny", "film animowany",
  ]

  private movies: any[];
  private movieUrl = 'http://localhost:4200/api/getAllMovies';

  constructor(private http: Http) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): any {
    return this.http.get(this.movieUrl).subscribe(res => {
      this.movies = res.json();
      console.log(this.movies);
    });
  }

  addMovie(valid) {
    if (valid) {
      const sameMovieTitle = this.movies
        .filter((movies) => movies.title == this.movie.title)
        .map((movie) => movie.title);
      if (sameMovieTitle == this.movie.title) {
        alert("Film już istnieje");
      }
      else {
        this.http.post("http://localhost:4200/api/postMovie", this.movie)
          .catch((err: Response) => {
            console.log(err);
            return Observable.throw(err.json());
          });
      }
    } else {
      alert("Błędnie wypełniona");
    }
  }

}
