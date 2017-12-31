import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

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
              private router: Router) {}

  ngOnInit() {
  }

  login(valid)
  {
    if (valid)
    {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });

      var result;
      var body = 'username='+this.email+'&password='+this.password;
      result = this.http.post(this.url+'/login', body, options)
        .map(res => {
          res.toString();
          console.log(res);
        });
      result.subscribe();
    }
    else
    {
      alert("Błędnie uzupełniony formularz")
    }
  }
}
