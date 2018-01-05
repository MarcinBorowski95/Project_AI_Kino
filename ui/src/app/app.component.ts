import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  private user;
  private userURL = './api/user';

  view: number = 0;
  userName;
  userSurname;

  isCollapsed = true;

  constructor(
    private http: Http,
    private router: Router,) {}

  ngOnInit(){
    this.getUser();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  getUser(): any {
    return this.http.get(this.userURL).subscribe(res => {
      this.user = res.json();
      this.view=this.user.principal.role;
      this.userName=this.user.principal.name;
      this.userSurname=this.user.principal.surname;
      console.log(this.userName);
      console.log(this.userSurname);
      console.log(this.user.principal.role);
    });
  }

  logout(){
    console.log("jestem");
    window.location.href = './api/logout'
  }
}
