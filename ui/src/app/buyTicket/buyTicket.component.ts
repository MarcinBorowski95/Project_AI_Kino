import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyTicket',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css']
})
export class BuyTicketComponent implements OnInit {

  spots: any[] = [
    { ID: 'A1' },
    { ID: 'A2' },
    { ID: 'A3' }
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  buyTicket()
  {
    this.router.navigate(['/']);
  }
}
