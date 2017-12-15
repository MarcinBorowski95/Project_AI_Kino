import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {
  
  private movies: any[];
  private hours: any[];
  private day: String = "0";
  private movieUrl
  private hourUrl

  constructor(
    private http: Http,
    private router: Router
    ) { }
  
  ngOnInit() {
    this.getMovie();
    this.getHours();
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
    this.router.navigate(["/sala"])
  }
}
