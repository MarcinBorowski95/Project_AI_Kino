import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private sharedTicketInfo = new BehaviorSubject<any>("");
  currentTicketInfo = this.sharedTicketInfo.asObservable();

  private sharedSeatsInfo = new BehaviorSubject<any>([]);
  currentSeatsInfo = this.sharedSeatsInfo.asObservable();


  constructor() { }

  changeTicketInfo(ticketInfo) {
    this.sharedTicketInfo.next(ticketInfo)
  }
  
  changeSeatInfo(seatInfo) {
    this.sharedSeatsInfo.next(seatInfo)
  }
}