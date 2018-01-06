import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {

  users: any[];
  usersUrl = "./api/getAllUsers";

  constructor(private http: Http) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {
    return this.http.get(this.usersUrl).subscribe(res => {
      this.users = res.json().sort((a,b) => a.id_user < b.id_user ? -1 : 1)
      console.log(this.users);
    });
  }
}
