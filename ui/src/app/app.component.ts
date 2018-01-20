import {Component, OnInit} from '@angular/core';
import {Http, HttpModule, RequestOptions , Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  user;
  private userURL;

  view: number = 0;
  userName;
  userSurname;

  isCollapsed = true;

  constructor(
    private http: Http,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  getUser(): any {
    this.userURL = 'https://polar-thicket-56641.herokuapp.com/api/user';
    return this.http.get(this.userURL).subscribe(res => {
      console.log(res);
      try {
        this.user = res.json();
        this.view = this.user.principal.role;
        this.userName = this.user.principal.name;
        this.userSurname = this.user.principal.surname;
        console.log(this.userName);
        console.log(this.userSurname);
        console.log(this.user.principal.role);
      } catch (e) {
        console.log('użytkonik niezalogowany');
      }
    });
  }

  logout() {
    console.log('wylogowano');
    this.http.get('https://polar-thicket-56641.herokuapp.com/api/logout').subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
      location.reload();
    });
  }
}
