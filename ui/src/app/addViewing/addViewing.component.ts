import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addViewing',
  templateUrl: './addViewing.component.html',
  styleUrls: ['./addViewing.component.css']
})
export class AddViewingComponent implements OnInit {

  viewing: any = {};

  private movies: any[];
  private movieUrl = 'http://localhost:4200/api/getAllMovies';

  private rooms: any[];
  private roomByDate;
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

  getRoom(): any {
    return this.http.get(this.roomUrl).subscribe(res => {
      this.rooms = res.json();
    });
  }

  getRoomByDate(): any {
    this.viewing.time = this.viewing.time && this.viewing.time.length === 5 ? this.viewing.time + ":00" : this.viewing.time;
    var roomByDate = 'http://localhost:4200/api/getRoomsByDateAndTime?dateParam=' + this.viewing.date_start + '&timeParam=' + this.viewing.time;
    return this.http.get(roomByDate).subscribe(res => {
      var roomID = res.json().map(x => x.id_room);
      var index = this.rooms.map(x => x.id_room).indexOf(roomID[0])
      if (index != -1) {
        this.rooms.splice(index, 1);
      }
    });
  }


  addViewing(valid) {
    if (valid) {
      this.http.post("http://localhost:4200/api/CreateViewing", this.viewing)
        .catch((err: Response) => {
          console.log(err);
          return Observable.throw(err.json());
        });
    } else {
      alert("Błędne")
    }
  }
}
