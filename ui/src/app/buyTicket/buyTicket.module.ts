import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buyTicket.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgxQRCodeModule } from 'ngx-qrcode2';

const routes = [
  { path: '', component: BuyTicketComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    HttpModule,
    NgxQRCodeModule
  ],
  declarations: [BuyTicketComponent]
})
export class BuyTicketModule { }
