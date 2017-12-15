import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  room;
  rows;
  seats;
  private roomUrl;

  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom(): any {
    this.roomUrl = 'http://localhost:4200/api/getRoomByIdShowtime?id_showtime=1';
    return this.http.get(this.roomUrl).subscribe(res => {
      this.room = res.json();
      console.log(this.room);
      this.rows = Array(this.room.rows).fill(1);
      console.log(this.rows)
      this.seats= Array(this.room.seatsInRow).fill(1);
    });
  }

}
