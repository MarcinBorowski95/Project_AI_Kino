import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMoviesComponent } from './addMovies.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: AddMoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [AddMoviesComponent]
})
export class AddMoviesModule { }