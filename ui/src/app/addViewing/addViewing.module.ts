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
  ],
  declarations: [AddViewingComponent]
})
export class AddViewingModule { }