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

  constructor(
    private http: Http,
    private router: Router,
    private data: DataService
    ) { }

  ngOnInit() {
    this.getMovie();
    this.getHours();
    this.data.currentMessage.subscribe(seans => this.seans = seans)
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

  changeDay(day) {
    this.day = day
    this.getMovie();
    this.getHours();
  }

  buyTicket(hour) {
    console.log(hour);
    this.newMessage(hour.id_showtime)
    this.router.navigate(["/sala"])
  }

  newMessage(message) {
    this.data.changeMessage(message)
  }
}
