import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaComponent } from './sala.component';

const routes = [
  { path: '', component: SalaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SalaComponent]
})
export class SalaModule { }