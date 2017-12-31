import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoughtTicketComponent } from './boughtTicket.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: BoughtTicketComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BoughtTicketComponent]
})
export class BoughtTicketModule { }