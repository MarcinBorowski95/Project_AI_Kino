import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {

  private movies: any[];
  private hours: any[];
  private day: String = "0";
  private movieUrl;
  private hourUrl;
  seans;
  time;

  constructor(
    private http: Http,
    private router: Router,
    private data: DataService
    ) { }

  ngOnInit() {
    this.getMovie();
    this.getHours();
    this.data.currentTicketInfo.subscribe(seans => this.seans = seans)
  }

  getMovie(): any {
    this.movieUrl = 'http://localhost:4200/api/getMoviesByDay?day=' + this.day;
    return this.http.get(this.movieUrl).subscribe(res => {
      this.movies = res.json();
      console.log(this.movies);
    });
  }

  getHours(): any {
    this.hourUrl = 'http://localhost:4200/api/getShowtimesByDay?day=' + this.day;
    return this.http.get(this.hourUrl).subscribe(res => {
      this.hours = res.json();
      console.log(this.hours);
    });
  }

  subTime(hour){
    this.time = hour.substring(0, 5);
    return this.time;
  }

  changeDay(day) {
    this.day = day
    this.getMovie();
    this.getHours();
  }

  buyTicket(movie, hour) {
    console.log(hour);
    console.log(movie);
    const ticketInfo = {
       id_showtime: hour.id_showtime,
       id_movie: hour.id_movie,
       id_room: hour.id_room,
       time: hour.time,
       date_start: hour.date_start,
       title: movie.title,
       title_pl: movie.title_pl,
    }
    this.sendTicketInfo(ticketInfo)
    this.router.navigate(["/sala"])
  }

  sendTicketInfo(ticketInfo) {
    this.data.changeTicketInfo(ticketInfo)
  }
}
