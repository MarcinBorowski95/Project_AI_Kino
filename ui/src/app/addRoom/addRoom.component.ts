import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';

@Component({
  selector: 'app-addRoom',
  templateUrl: './addRoom.component.html',
  styleUrls: ['./addRoom.component.css']
})
export class AddRoomComponent implements OnInit {

  private room: any = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  addRoom(valid) {
    if (valid) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post("http://localhost:4200/api/postRoom", this.room, options)
        .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
        );
    } else {
      console.log("Błędne wypełnienie");

    }
  }
}
