import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-addViewing',
  templateUrl: './addViewing.component.html',
  styleUrls: ['./addViewing.component.css']
})
export class AddViewingComponent implements OnInit {

  viewing = [];

  private movies: any[];
  private movieUrl = 'http://localhost:4200/api/getAllMovies';
  
  private rooms: any[];
  private roomUrl = 'http://localhost:4200/api/getAllRooms';

  constructor(private http: Http) { }

  ngOnInit() {
    this.getMovie();
    this.getRoom();
  }

  getMovie(): any {
    return this.http.get(this.movieUrl).subscribe(res => {
      this.movies = res.json();
      console.log(this.movies);
    });
  }

  getRoom(): any {;
    return this.http.get(this.roomUrl).subscribe(res => {
      this.rooms = res.json();
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
