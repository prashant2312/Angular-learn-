import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BusbookingService {
tickets:number[]=[1];
  constructor() { }
  bookTicket(val:number){
    this.tickets.push(val);
  }
  getTicket(){
    return this.tickets;
  }
}
