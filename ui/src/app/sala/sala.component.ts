import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

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
  seans = "1";

  constructor(
    private http: Http,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom(): any {
    this.roomUrl = 'http://localhost:4200/api/getRoomByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.roomUrl).subscribe(res => {
      this.room = res.json();
      console.log(this.room);
      this.rows = Array(this.room.rows).fill(1);
      console.log(this.rows)
      this.seats= Array(this.room.seatsInRow).fill(1);
    });
  }

  buyTicket()
  {
    this.router.navigate(['/buyTicket']);
  }

}
