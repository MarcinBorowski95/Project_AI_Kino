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
  private movieUrl;
  private seanseUrl
  

  constructor(private http: Http) { }
  
  ngOnInit() {
    this.getMovie();
  }

  getMovie(): any {
    this.movieUrl = 'http://localhost:4200/api/movies?day=' + this.day;
    return this.http.get(this.movieUrl).subscribe(res => {
      this.movies = res.json();
      console.log(this.movies);
      console.log(this.movieUrl);
      console.log(this.day);
      this.movies.forEach(element => {
        this.getSeans(element.id_movie)
      });
    });
  }

  getSeans(ID): any {
    this.seanseUrl = 'http://localhost:4200/api/showtime?id_movie=' + ID + '&day=' + this.day
    return this.http.get(this.seanseUrl).subscribe(res => {
      this.hours = res.json();
      console.log(this.hours);
    });
  }

  changeDay(day) {
    this.day=day;
    this.getMovie();
  }
}
