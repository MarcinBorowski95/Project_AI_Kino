import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [
    { "ID": '1' , "title": "film1" , desc: "Ten film jest o tym" , picture: "http://s3.amazonaws.com/libapps/accounts/47766/images/film.jpg"},
    { ID: '2' , title: "film2" , desc: "Ten film jest o tamtym" , picture: "https://cdn.empireonline.com/jpg/70/0/0/1280/960/aspectfit/0/0/0/0/0/0/c/features/59e8d795405a5c6805947751/44%20Fear%20and%20Loathing%20in%20Las%20Vegas.jpg" },
    { ID: '3' , title: "film3" , desc: "Ten film jest o siamtym" , picture: "https://i.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
