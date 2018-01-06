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
    "horror", "komedia", "thriller", "film akcji", "film romantyczny", "film animowany",
  ]

  private movies: any[];
  private movieUrl = './api/getAllMovies';

  constructor(
    private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovie();
    this.setMinDates();
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
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post("./api/postMovie", this.movie , options)
          .subscribe(
          res => {
            console.log(res);
            if (res.ok) {
              this.router.navigate(['/']);
            }
          },
          err => {
            console.log("Error occured");
          }
          );;
      }
    } else {
      alert("Błędnie wypełniona");
    }
  }
  
  setMinDates()
  {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      var ddString = '0' + dd
    }
    if (mm < 10) {
      var mmString = '0' + mm
    }

    var todayString = yyyy + '-' + mmString + '-' + ddString;
    document.getElementById("dateRealese").setAttribute("min", todayString);
    document.getElementById("dateEnd").setAttribute("min", todayString);
  }
}
