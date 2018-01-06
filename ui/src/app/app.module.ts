import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { DataService } from './_services/data.service';
import { AuthenticationService } from './login/authentication.service';
import {HttpModule} from "@angular/http";

import { NgxQRCodeModule } from 'ngx-qrcode2';
import {FacebookModule} from "ngx-facebook";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    NgbModule.forRoot(),
    NgxQRCodeModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  providers: [DataService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
