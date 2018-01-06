import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { AuthenticationService } from './authentication.service';
import {FacebookService, LoginResponse} from "ngx-facebook";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email;
  password;
  fbuser;

  constructor(private http: Http,
              private router: Router,
              private authenticationService: AuthenticationService,
              private fb: FacebookService) {
  }

  ngOnInit() {
  }

  login(valid) {
    if (valid) {
      this.authenticationService.login(this.email, this.password)
        .subscribe(result => {
          if (result === true) {
            alert("Logowanie udane!")
            this.router.navigate(["/"]);
            window.location.reload();
          } else {
            alert("Logowanie nieudane!");
          }
        });
    }
    else {
      alert("Błędnie uzupełniony formularz")
    }
  }

  loginWithFacebook() {
    this.fb.login()
      .then((response: LoginResponse) => {

        this.fbuser = {accountNonExpired : true, accountNonLocked: true,
          credentialsNonExpired: true, e_mail : this.fb.getAuthResponse().userID , enabled : true,
          id : 0, name : this.fb.getAuthResponse().userID, surname : this.fb.getAuthResponse().userID,
          role : "C" , password : this.fb.getAuthResponse().userID, username : this.fb.getAuthResponse().userID };

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        this.http.get("./api/email?e_mail=" + this.fb.getAuthResponse().userID).subscribe(res => {
          if (res.json()[0].trim() === this.fbuser.e_mail.trim()) {
            this.authenticationService.login(this.fb.getAuthResponse().userID, this.fb.getAuthResponse().userID)
              .subscribe(result => {
                if (result === true) {
                  alert("Logowanie udane!")
                  this.router.navigate(["/"])
                } else {
                  alert("Logowanie nieudane!");
                }
              });
          }
          else {
            this.http.post("./api/userCreate", this.fbuser, options).subscribe(
              res => {
                if (res.ok) {
                  this.authenticationService.login(this.fb.getAuthResponse().userID, this.fb.getAuthResponse().userID)
                    .subscribe(result => {
                      if (result === true) {
                        alert("Logowanie udane!")
                        this.router.navigate(["/"])
                      } else {
                        alert("Logowanie nieudane!");
                      }
                    });
                }
              });
          }
          this.router.navigate(['/']);
        });
      });
  }
}
