import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addMovies',
  templateUrl: './addMovies.component.html',
  styleUrls: ['./addMovies.component.css']
})
export class AddMoviesComponent implements OnInit {

  movie: any = {
  };

  generes = [
    "horror", "komedia", "thriller", "film akcji", "film romantyczny", "film animowany", 
  ]

  constructor() { }

  ngOnInit() {
  }

}
