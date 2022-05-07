import { Component, OnInit } from '@angular/core';
import { BusbookingService } from '../busbooking.service';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.css'],
  providers:[BusbookingService]
})
export class Agent2Component implements OnInit {

  ticket2:number[];
  constructor(private busBookingService:BusbookingService) {
    this.ticket2=this.busBookingService.getTicket();
   }

  ngOnInit(): void {
  }
  bookTicket(val:any){
    this.busBookingService.bookTicket(val);
    
  }

}
