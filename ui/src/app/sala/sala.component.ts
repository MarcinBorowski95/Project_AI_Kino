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
  seans;

  constructor(
    private http: Http,
    private router: Router,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(seans => this.seans = seans)
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
