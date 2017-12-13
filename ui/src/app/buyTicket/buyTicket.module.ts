import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buyTicket.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: BuyTicketComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BuyTicketComponent]
})
export class BuyTicketModule { }