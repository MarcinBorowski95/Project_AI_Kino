import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {

  users: any[];
  usersUrl = 'https://polar-thicket-56641.herokuapp.com/api/getAllUsers';

  constructor(private http: Http) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {
    return this.http.get(this.usersUrl).subscribe(res => {
      this.users = res.json().sort((a, b) => a.id_user < b.id_user ? -1 : 1);
      for (let i = 0 ; i < this.users.length ; i++) {
        if (this.users[i].role === '1') {
          this.users[i].role = 'Użytkownik';
        } else if (this.users[i].role === '2') {
          this.users[i].role = 'Pracownik';
        }else if (this.users[i].role === '3') {
          this.users[i].role = 'Administrator';
        }
      }
      console.log(this.users);
    });
  }
}
