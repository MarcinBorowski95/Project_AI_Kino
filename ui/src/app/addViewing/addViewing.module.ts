import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddViewingComponent } from './addViewing.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: AddViewingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpModule
  ],
  declarations: [AddViewingComponent]
})
export class AddViewingModule { }