import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-checkTicket',
  templateUrl: './checkTicket.component.html',
  styleUrls: ['./checkTicket.component.css']
})
export class CheckTicketComponent implements OnInit {

  private tickets : any[] = [];
  private ticketURL;
  private id_ticket=1;
  flaga=0;
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string;

  constructor(
    private router: Router,
    private data: DataService,
    private http: Http
  ) { }

  ngOnInit() {
  }

  getTickets() : any{
    this.flaga=0;
    console.log(this.id_ticket)
    this.ticketURL = 'http://localhost:4200/api/getTicketById?id_ticket=' + this.id_ticket;
    return this.http.get(this.ticketURL).subscribe(res => {
        //this.tickets[0] = res.json();
        try {
          this.tickets[0] = res.json();
          this.value = this.tickets[0].id_ticket.toString();
          this.flaga=1;
        }catch (Exception){
          alert("Wprowadzony zły numer biletu!")
        }
      console.log(this.tickets);
    });
  }

  confirm(){
    this.router.navigate(['/']);
  }

}
