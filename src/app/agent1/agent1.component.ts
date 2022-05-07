import { BusbookingService } from './../busbooking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.css'],
  providers:[BusbookingService]
})
export class Agent1Component implements OnInit {
ticket1:number[];
  constructor(private busBookingService:BusbookingService) {
    this.ticket1=this.busBookingService.getTicket();
   }

  ngOnInit(): void {
  }
  bookTicket(val:any){
    this.busBookingService.bookTicket(val);
    
  }
}
