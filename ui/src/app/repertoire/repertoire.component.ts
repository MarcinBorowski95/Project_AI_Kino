import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {
  
  private movies: any[];
  private hours: any[];
  private day: String = "1";
  private movieUrl = 'http://localhost:4200/api/movies?day=' + this.day;
  private seanseUrl
  

  constructor(private http: Http) { }
  
  ngOnInit() {
    this.getMovie();
  }

  getMovie(): any {
    return this.http.get(this.movieUrl).subscribe(res => {
      this.movies = res.json();
      console.log(this.movies);
    });
  }

  getSeans(movieID: any): any {
    this.seanseUrl = 'http://localhost:4200/api/showtime?id_movie=' + movieID + '&day=' + this.day
    return this.http.get(this.seanseUrl).subscribe(res => {
      this.hours = res.json();
      console.log(this.hours);
    });
  }
}
