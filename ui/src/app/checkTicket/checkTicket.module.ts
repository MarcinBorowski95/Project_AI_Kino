import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTicketComponent } from './checkTicket.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

const routes = [
  { path: '', component: CheckTicketComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule
  ],
  declarations: [CheckTicketComponent]
})
export class CheckTicketModule { }
