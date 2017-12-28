import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyTicket',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css']
})
export class BuyTicketComponent implements OnInit {

  spots: any[] = [
    { ID: 'A1', selectedTicketType:'Wybierz rodzaj biletu', price: 0 },
    { ID: 'A2', selectedTicketType:'Wybierz rodzaj biletu', price: 0 },
    { ID: 'A3', selectedTicketType:'Wybierz rodzaj biletu', price: 0 }
  ];

  ticketTypes: any[] = [
    {name: "Normalny", price2D: 24.99 , price3D: 29.99},
    {name: "Dziecięcy", price2D: 18.99 , price3D: 23.99}, 
    {name: "Senior", price2D: 20.99 , price3D: 24.99}
  ];

  ticketsPrice = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buyTicket()
  {
    this.router.navigate(['/']);
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
