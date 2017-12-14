import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http/src/http_module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
  ],
  providers: [ 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
