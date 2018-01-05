import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { AuthenticationService } from './authentication.service';
import {InitParams, FacebookService, LoginResponse} from "ngx-facebook";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(
              private http: Http,
              private router: Router,
              private authenticationService: AuthenticationService,
              private fb: FacebookService) {
  }

  ngOnInit() {
  }

  login(valid)
  {
    if (valid)
    {
      this.authenticationService.login(this.email, this.password)
        .subscribe(result => {
          if (result === true) {
            alert("Logowanie udane!")
            this.router.navigate(["/"])
          } else {
            alert("Logowanie nieudane!");
          }
        });
    }
    else
    {
      alert("Błędnie uzupełniony formularz")
    }
  }

  loginWithFacebook() {
    // this.fb.login()
    //   .then((response: LoginResponse) => console.log(response))
    //   .catch((error: any) => console.error(error));
    // header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Methods: DELETE, HEAD, GET, OPTIONS, POST, PUT');
    // header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    // header('Access-Control-Max-Age: 1728000');
    let headers = new Headers({ 'Access-Control-Allow-Origin': ' *'});
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://localhost:4200/api", "", options).subscribe(res => console.log(res));
  }
}
