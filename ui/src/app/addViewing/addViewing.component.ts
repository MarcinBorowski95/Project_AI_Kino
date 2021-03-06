import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addViewing',
  templateUrl: './addViewing.component.html',
  styleUrls: ['./addViewing.component.css']
})
export class AddViewingComponent implements OnInit {

  viewing: any = {};

  movies: any[];
  private movieUrl = './api/getAllMovies';

  rooms: any[];
  private roomByDate;
  private roomUrl = './api/getAllRooms';

  constructor(
    private http: Http,
    private router: Router
  ) { }

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
    this.viewing.time = this.viewing.time && this.viewing.time.length === 5 ? this.viewing.time + ':00' : this.viewing.time;
    const roomByDate = 'https://immense-inlet-78725.herokuapp.com/getRoomsByDateAndTime?dateParam=' + this.viewing.date_start + '&timeParam=' + this.viewing.time;
    return this.http.get(roomByDate).subscribe(res => {
      this.rooms = res.json();
    });
  }


  addViewing(valid) {
    if (valid) {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      this.http.post('https://immense-inlet-78725.herokuapp.com/postShowtime', this.viewing, options)
        .subscribe(
        res => {
          console.log(res);
          if (res.ok) {
            alert('Seans dodany pomyślnie');
            this.router.navigate(['/']);
          }
        },
        err => {
          console.log('Error occured');
        }
        );
    } else {
      alert('Błędne');
    }
  }
}
