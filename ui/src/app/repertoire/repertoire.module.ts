import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertoireComponent } from './repertoire.component';

const routes = [
  { path: '', component: RepertoireComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RepertoireComponent]
})
export class RepertoireModule { }