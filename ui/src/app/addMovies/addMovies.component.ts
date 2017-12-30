import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  private movieUrl = 'http://localhost:4200/api/getAllCurrentMovies';

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
      if (this.movies.forEach(movieDB => {
        if (movieDB.title == this.movie.title || movieDB.title_pl == this.movie.titlePL) {
          return true;
        }
      })) {
        alert("taki film istnieje")
      } else {
        alert("Poprawnie wypełnione")
        console.log("Do uzupełnienia");
        
      }
    } else {
      alert("Błędnie wypełniona")
    }
  }

}
