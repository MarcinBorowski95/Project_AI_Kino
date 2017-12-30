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
  selectedSeatsInfo = new Array();
  private selectedSeats: Array<any> = [];

  constructor(
    private http: Http,
    private router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.data.currentTicketInfo.subscribe(ticketInfo => this.ticketInfo = ticketInfo);
    this.data.currentSeatsInfo.subscribe(selectedSeatsInfo => this.selectedSeatsInfo = selectedSeatsInfo)
    this.seans = this.ticketInfo.id_showtime;
    this.getRoom();
    this.getSeats();
  }

  getRoom(): any {
    this.roomUrl = 'http://localhost:4200/api/getRoomByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.roomUrl).subscribe(res => {
      this.room = res.json();
      this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });
  }

  getSeats(): any {
    this.seatUrl = 'http://localhost:4200/api/getSeatsByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.seatUrl).subscribe(res => {
      this.seats = res.json();
    });
  }

  buyTicket() {
    this.sendSeatInfo(this.selectedSeatsInfo)
    this.router.navigate(['/buyTicket']);
  }

  selectSeat(s) {
    s.selectedTicketType = 'Wybierz rodzaj biletu';
    s.price = 0;
    s.ID ="Rząd: " + s.row.toString() + " Miejsce: " + s.seat.toString();
    this.selectedSeatsInfo.push(s);
    console.log(this.selectedSeatsInfo);

  }

  sendSeatInfo(seatInfo) {
    this.data.changeSeatInfo(seatInfo)
  }

  Clicked(num) {
    return this.selectedSeats[num] == 1;
  }

  changeVar(num) {
    if (this.selectedSeats[num] != 1 && this.selectedSeats[num] != 0)
      this.selectedSeats[num] = 0;

    if (this.selectedSeats[num] == 0)
      this.selectedSeats[num] = 1;
    else
      this.selectedSeats[num] = 0;


  }
}
