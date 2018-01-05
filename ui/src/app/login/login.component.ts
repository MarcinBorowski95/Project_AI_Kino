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
  fbuser;

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
    this.fb.login()
      .then((response: LoginResponse) => {
      if(this.fb.getAuthResponse().userID == this.http.get("http://localhost:4200/api/email?e_mail=" +
          this.fb.getAuthResponse().userID).subscribe.toString()){
        alert("1");
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
        alert(this.http.get("http://localhost:4200/api/email?e_mail=" +
          this.fb.getAuthResponse().userID).subscribe);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if(this.fb.getAuthResponse().userID == this.http.get("http://localhost:4200/api/email?e_mail=" +
            this.fb.getAuthResponse().userID).subscribe.toString()){
          console.log(this.fbuser);
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
          this.fbuser = {
            accountNonExpired: true, accountNonLocked: true,
            credentialsNonExpired: true, e_mail: this.fb.getAuthResponse().userID, enabled: true,
            id: 0, name: this.fb.getAuthResponse().userID, surname: this.fb.getAuthResponse().userID,
            role: "C", password: this.fb.getAuthResponse().userID, username: this.fb.getAuthResponse().userID
          };

          this.http.post("http://localhost:4200/api/userCreate", this.fbuser, options).subscribe(
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
                this.router.navigate(['/']);
              }
            },
            err => {
              console.log("Error occured");
            }
          );
        }
      }
    });
  }
}
