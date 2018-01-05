import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {HttpModule} from "@angular/http";

const routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
