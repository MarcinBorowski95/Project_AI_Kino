import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addRoom',
  templateUrl: './addRoom.component.html',
  styleUrls: ['./addRoom.component.css']
})
export class AddRoomComponent implements OnInit {

  room: any = {};

  constructor(
    private http: Http,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addRoom(valid) {
    if (valid) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log(this.room);

      this.http.post("https://immense-inlet-78725.herokuapp.com/postRoom", this.room, options)
        .subscribe(
        res => {
          console.log(res);
          if (res.ok) {
            alert('Sala dodana pomyślnie');
            this.router.navigate(['/']);
          }
        },
        err => {
          console.log(err);
        }
        );
    } else {
      console.log("Błędne wypełnienie");

    }
  }
}
