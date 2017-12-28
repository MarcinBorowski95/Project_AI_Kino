import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<any>("");
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message) {
    this.messageSource.next(message)
  }
}