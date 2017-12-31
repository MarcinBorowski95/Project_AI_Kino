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
  rows = [];
  seats;
  private roomUrl;
  private seatUrl;
  private seansUrl;
  seans;
  ticketInfo;
  selectedSeatsInfo = new Array();
  private selectedSeats: Array<any> = [];
  seansInfo;

  flag;
  tempArray = new Array();

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
    this.getSeansInfo();
  }

  getRoom(): any {
    this.roomUrl = 'http://localhost:4200/api/getRoomByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.roomUrl).subscribe(res => {
      this.room = res.json();
    });
  }

  getSeats(): any {
    this.seatUrl = 'http://localhost:4200/api/getSeatsByIdShowtime?id_showtime=' + this.seans;
    return this.http.get(this.seatUrl).subscribe(res => {
      this.seats = res.json();
      let index = 0;
      const j = res.json();
      for(let i = 0 ; i < this.seats.length ; i++){
        if(index < j[i].row) {
          this.rows[index] = j[i].row;
          index++;
        }
      }
      console.log(this.rows);
      console.log(this.seats);
    });
  }

  getSeansInfo() : any {
    this.seansUrl = 'http://localhost:4200/api/getShowtimeDetails?id_showtime=' + this.seans;
    return this.http.get(this.seansUrl).subscribe(res => {
      this.seansInfo = res.json();
      console.log(this.seansInfo);
    })
  }

  buyTicket() {
    this.sendSeatInfo(this.selectedSeatsInfo)
    this.router.navigate(['/buyTicket']);
  }

  selectSeat(s) {

    this.tempArray = [];

    s.selectedTicketType = 'Wybierz rodzaj biletu';
    s.price = 0;
    s.ID ="Rząd: " + s.row.toString() + " Miejsce: " + s.seat.toString();

    if(this.flag==1){
      var index = -1;
      index = this.selectedSeatsInfo.map(x => x.ID).indexOf("Rząd: " + s.row.toString() + " Miejsce: " + s.seat.toString());
    //  var index = this.selectedSeatsInfo.indexOf("Rząd: " + s.row.toString() + " Miejsce: " + s.seat.toString());
      this.selectedSeatsInfo.splice(index, 1);
      console.log(index);
    }
    else{
      this.selectedSeatsInfo.push(s);
      console.log(this.selectedSeatsInfo);
    }


    // this.tempArray  = Object.assign([], this.selectedSeatsInfo);
    // console.log(this.tempArray)
  }

  sendSeatInfo(seatInfo) {
    this.data.changeSeatInfo(seatInfo)
  }

  Clicked(num) {
    return this.selectedSeats[num] == 1;
  }

  changeVar(num) {

    this.flag=0;

    if (this.selectedSeats[num] != 1 && this.selectedSeats[num] != 0)
      this.selectedSeats[num] = 0;

    if (this.selectedSeats[num] == 0){
      this.selectedSeats[num] = 1;
    }

    else{
      this.selectedSeats[num] = 0;
      this.flag=1;
    }

  }

}
