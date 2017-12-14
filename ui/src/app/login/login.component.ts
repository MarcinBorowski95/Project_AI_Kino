import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUser: any = {};

  constructor() { }

  ngOnInit() {
  }

  login(valid)
  {
    if (valid)
    {
      alert("Poprawny formularz, Brak obsługi rejestracji")
    }
    else
    {
      alert("Błędnie uzupełniony formularz")
    }    
  }
}
