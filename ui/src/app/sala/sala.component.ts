import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

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
  private seatUrl;
  seans;

  constructor(
    private http: Http,
    private router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(seans => this.seans = seans)
    this.getRoom();
    this.getSeats();
  }

  getRoom(): any {
    this.roomUrl = 'http://localhost:4200/api/getRoomByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.roomUrl).subscribe(res => {
      this.room = res.json();
      console.log(this.room);
      this.rows = [{number: "1"}, {number: "2"}, {number: "3"}];
      console.log(this.rows)
    });
  }

  getSeats(): any {
    this.seatUrl = 'http://localhost:4200/api/getSeatsByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.seatUrl).subscribe(res => {
      this.seats = res.json();
      console.log(this.seats);
    });
  }

  buyTicket()
  {
    this.router.navigate(['/buyTicket']);
  }
}
