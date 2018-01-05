import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {HttpModule} from "@angular/http";
import {FacebookModule} from "ngx-facebook/dist/esm";


const routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  declarations: [LoginComponent],
  bootstrap : [LoginComponent]
})
export class LoginModule { }
