import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import {Headers, Http, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-buyTicket',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css']
})
export class BuyTicketComponent implements OnInit {

  elementType: 'url' | 'canvas' | 'img' = 'url';
  value = 'Techiediaries';

  seats: any[] = [];
  ticketInfo;
  ticketsToAdd: any[] = [];
  values: any[] = [];
  numOfSeats;
  seatsIds: any[] = [];

  flaga;
  id;
  time;

  ticketTypes: any[] = [
    {name: 'Normalny', price2D: 24.99 , price3D: 29.99},
    {name: 'Dziecięcy', price2D: 18.99 , price3D: 23.99},
    {name: 'Senior', price2D: 20.99 , price3D: 24.99}
  ];

  ticketsPrice = 0;

  constructor(
    private router: Router,
    private data: DataService,
    private http: Http
  ) { }

  ngOnInit() {
    this.data.currentSeatsInfo.subscribe(selectedSeatsInfo => this.seats = selectedSeatsInfo);
    this.data.currentTicketInfo.subscribe(ticketInfo => this.ticketInfo = ticketInfo);
    this.data.currentSeatsNumber.subscribe(seatsNumber => this.numOfSeats = seatsNumber);
    this.getTicketType();
    console.log(this.ticketInfo);
    console.log(this.numOfSeats);
    console.log(this.seats);
    for (let i = 0 ; i < this.seats.length; i++) {
      this.seatsIds[i] = this.seats[i].id_seat;
    }

    const t = this.ticketInfo.time.toString();
    this.time = t.substring(0, 5);
  }

  buyTicket() {
    console.log('id: ' + this.id);

    this.flaga = 0;
    this.sendSeatInfo([]);
    // this.router.navigate(['/']);

    console.log(this.seatsIds);

    for (let i = 0; i < this.numOfSeats ; i++) {
      this.id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.value = this.id.toString();
      this.ticketsToAdd[i] = { date : this.ticketInfo.date_start, id_seat : this.seatsIds[i]
         , id_showtime : this.ticketInfo.id_showtime, id_ticket : this.id, id_type : 1, id_user : 1 };
      this.values[i] = this.value;
    }
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post('https://immense-inlet-78725.herokuapp.com/postTickets', this.ticketsToAdd , options).subscribe(
      res => {
        console.log(res);
        if (res.ok) {
          this.flaga = 1;
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }


  sendSeatInfo(seatInfo) {
    this.data.changeSeatInfo(seatInfo);
  }

  getTicketType(): any {
    return this.http.get('https://immense-inlet-78725.herokuapp.com/getAllTicketsTypes').subscribe(res => {
      this.ticketTypes = res.json();
    });
  }


  changeTicketType(spot, ticketType) {
    if (spot.price !== 0) {
      this.ticketsPrice -= spot.price;
    }
    spot.selectedTicketType = ticketType.type;
    spot.price = ticketType.price;
    this.ticketsPrice += spot.price;
  }
}
