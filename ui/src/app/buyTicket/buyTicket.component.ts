import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-buyTicket',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css']
})
export class BuyTicketComponent implements OnInit {

  seats: any[] = [

  ];


  ticketTypes: any[] = [
    {name: "Normalny", price2D: 24.99 , price3D: 29.99},
    {name: "Dziecięcy", price2D: 18.99 , price3D: 23.99}, 
    {name: "Senior", price2D: 20.99 , price3D: 24.99}
  ];

  ticketsPrice = 0;

  constructor(
    private router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.data.currentSeatsInfo.subscribe(selectedSeatsInfo => this.seats = selectedSeatsInfo)
  }

  buyTicket()
  {
    this.sendSeatInfo([]);
    this.router.navigate(['/']);
  }

  sendSeatInfo(seatInfo) {
    this.data.changeSeatInfo(seatInfo)
  }

  changeTicketType(spot, ticketType)
  {
    if(spot.price != 0)
    {
      this.ticketsPrice -= spot.price;
    }
    spot.selectedTicketType = ticketType.name;
    spot.price = ticketType.price2D;
    this.ticketsPrice += spot.price;
  }
}
