import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';

const routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }