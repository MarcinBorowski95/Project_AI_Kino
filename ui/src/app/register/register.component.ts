import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: any = {};

  constructor() { }

  ngOnInit() {
  }


  register(valid)
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
