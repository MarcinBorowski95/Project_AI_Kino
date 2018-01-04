import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTicketComponent } from './checkTicket.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: CheckTicketComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CheckTicketComponent]
})
export class CheckTicketModule { }