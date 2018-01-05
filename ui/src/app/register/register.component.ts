import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: any = {};
  userToInsert;

  constructor(private http: Http,
              private router: Router) { }

  ngOnInit() {
  }


  register(valid)
  {
    if (valid)
    {
      this.userToInsert = {accountNonExpired : true, accountNonLocked: true,
        credentialsNonExpired: true, e_mail : this.registerUser.email , enabled : true,
        id : 0, name : this.registerUser.firstname, surname : this.registerUser.lastname,
        role : "C" , password : this.registerUser.password, username : this.registerUser.email };
      console.log(this.userToInsert);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.get("http://localhost:4200/api/email?e_mail=" + this.registerUser.email).subscribe(res => {
        if(res.json()[0] === this.registerUser.email){
          alert("Podany email już istnieje!")
        }
        else {
          this.http.post("http://localhost:4200/api/userCreate", this.userToInsert, options).subscribe(
            res => {
              if (res.ok) {
                alert("Rejestracja udana!")
                this.router.navigate(['/']);
              }
            },
            err => {
              console.log("Error occured");
            }
          );
        }
      });
    }
    else
    {
      alert("Błędnie uzupełniony formularz")
    }
  }
}
