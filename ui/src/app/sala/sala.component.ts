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
  ticketInfo;
  private selectedSeats = [];

  constructor(
    private http: Http,
    private router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(ticketInfo => this.ticketInfo = ticketInfo);
    this.seans=this.ticketInfo.id_showtime;
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

  newMessage(message) {
    this.data.changeMessage(message)
  }

  Clicked(num) {
    return this.selectedSeats[num] == 1;
  }

  changeVar(num){
    if(this.selectedSeats[num] != 1 && this.selectedSeats[num] != 0)
      this.selectedSeats[num] = 0;

    if(this.selectedSeats[num] == 0)
      this.selectedSeats[num] = 1;
    else
      this.selectedSeats[num] = 0;
  }
}
