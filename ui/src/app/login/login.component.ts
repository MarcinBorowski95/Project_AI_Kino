import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginUser: any = {};
  email;
  password;

  private url: string = "http://localhost:8080";

  constructor(
              private http: Http,
              private router: Router,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  login(valid)
  {
    if (valid)
    {
      this.authenticationService.login(this.email, this.password)
        .subscribe(result => {
          if (result === true) {
            alert("sukces")
          } else {
            alert("Błąd logowania");
          }
        });
    }
    else
    {
      alert("Błędnie uzupełniony formularz")
    }
  }
}
