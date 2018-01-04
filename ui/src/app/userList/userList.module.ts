import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './userList.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: UserListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [UserListComponent]
})
export class UserListModule { }