import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {

  users = [
    {ID: 1 , Firstname: "Marcin" , Lastname: "Borowski"},
    {ID: 2 , Firstname: "Marcin" , Lastname: "Borowski"},
    {ID: 3 , Firstname: "Marcin" , Lastname: "Borowski"},
    {ID: 4 , Firstname: "Marcin" , Lastname: "Borowski"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
