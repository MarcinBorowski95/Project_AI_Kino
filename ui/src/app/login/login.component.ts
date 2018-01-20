import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {FacebookService, LoginResponse, FacebookModule, UIParams, UIResponse} from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email;
  password;
  fbuser;
  fb_id;
  fb_first_name;
  fb_last_name;
  fb_email;

  constructor(private http: Http,
              private router: Router,
              private authenticationService: AuthenticationService,
              private fb: FacebookService,
              private fbp: FacebookModule) {
  }

  ngOnInit() {
  }

  login(valid) {
    if (valid) {
      this.authenticationService.login(this.email, this.password)
        .subscribe(result => {
          if (result === true) {
            alert('Logowanie udane');
            this.router.navigate(['/']);
            location.reload();
          } else {
            alert('Logowanie nieudane');
          }
        }, error => {
        });
    } else {
      alert('Błędnie uzupełniony formularz');
    }
  }

  loginWithFacebook() {
    this.fb.login()
      .then((response: LoginResponse) => {
        this.getUserInformation();
      });
  }

  getUserInformation() {
    this.fb.api('/me',  'get', { locale: 'en_US', fields: 'first_name, last_name'})
      .then( (response: LoginResponse) => {
        this.fbuser = response;
        this.fb_first_name = this.fbuser.first_name;
        this.fb_last_name = this.fbuser.last_name;
        this.fb_email = this.fbuser.id;

        this.fbuser = {accountNonExpired : true, accountNonLocked: true,
          credentialsNonExpired: true, e_mail : this.fb_email , enabled : true,
          id : 0, name : this.fb_first_name, surname: this.fb_last_name,
          role : 'C' , password : this.fb.getAuthResponse().userID, username : this.fb_email };

        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        this.http.get('https://immense-inlet-78725.herokuapp.com/email?e_mail=' + this.fb_email).subscribe(res => {
          let email_res = 'brak';
          try {
            email_res = res.json()[0].trim();
          }catch (e) {
            console.log('Brak emaila w bazie');
          }
          if (email_res === this.fb_email) {
            this.authenticationService.login(this.fb_email, this.fb.getAuthResponse().userID)
              .subscribe(result => {
                if (result === true) {
                  alert('Logowanie udane!');
                  this.router.navigate(['/']);
                  location.reload();
                } else {
                  alert('Logowanie nieudane!');
                }
              });
          } else {
            this.http.post('https://immense-inlet-78725.herokuapp.com/userCreate', this.fbuser, options).subscribe(
              res1 => {
                if (res1.ok) {
                  this.authenticationService.login(this.fb_email, this.fb.getAuthResponse().userID)
                    .subscribe(result => {
                      if (result === true) {
                        alert('Logowanie udane!');
                        this.router.navigate(['/']);
                        location.reload();
                      } else {
                        alert('Logowanie nieudane!');
                      }
                    });
                }
              });
          }
        });
      });
  }
}
