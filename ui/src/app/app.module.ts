import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { DataService } from './_services/data.service';

import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    NgbModule.forRoot(),
    NgxQRCodeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
