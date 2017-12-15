import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {
  
  private movies: any[];
  private day: String = "1";
  private movieUrl = 'http://localhost:4200/api/movie?day=' + this.day;
  private seansUrl = 'http://localhost:4200/api/showtime?id_movie=' + "1" + '&day=' + this.day;

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
}
