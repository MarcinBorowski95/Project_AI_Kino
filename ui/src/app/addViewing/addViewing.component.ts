import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-addViewing',
  templateUrl: './addViewing.component.html',
  styleUrls: ['./addViewing.component.css']
})
export class AddViewingComponent implements OnInit {

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

  addViewing(valid)
  {
    if (valid) {
      alert("Poprawne")
    } else {
      alert("Błędne")
    }
  }
}
