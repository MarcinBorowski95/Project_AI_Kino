import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addMovies',
  templateUrl: './addMovies.component.html',
  styleUrls: ['./addMovies.component.css']
})
export class AddMoviesComponent implements OnInit {

  movie: any = {
  };

  generes = [
    'horror', 'komedia', 'thriller', 'film akcji', 'film romantyczny', 'film animowany',
  ];

  private movies: any[];
  private movieUrl = 'https://immense-inlet-78725.herokuapp.com/getAllMovies';

  constructor(
    private http: Http,
    private router: Router
  ) { }

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
        alert('Film już istnieje');
      }
      else {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.http.post('https://immense-inlet-78725.herokuapp.com/postMovie', this.movie , options)
          .subscribe(
          res => {
            console.log(res);
            if (res.ok) {
              alert('Film dodany pomyślnie');
              this.router.navigate(['/']);
            }
          },
          err => {
            console.log('Error occured');
          }
          );
      }
    } else {
      alert('Błędnie wypełniona');
    }
  }

}
