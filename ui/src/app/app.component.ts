import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  view: number = 1;

  isCollapsed = true;

  constructor() {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
