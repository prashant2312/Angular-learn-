import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  customerDataArray:any;

  constructor(private customerDetails:UserdataService,private router:Router) { }
// userObj={
//   name:"tutorialwebsite",
//   age:55,
//   subject:"angular",
//   email:"abc@gmail.com"
// }
  ngOnInit(): void {
    // localStorage.setItem("username","Tutorialwebsite");
    // localStorage.setItem("user",JSON.stringify(this.userObj))
    // console.log(localStorage.getItem("username"));
    // sessionStorage.setItem("email","abc@gmail.com")
    this.customerDataArray=this.customerDetails.getCustomerData();
  }
close(){
  this.router.navigate([{outlets:{'customerList':null,'customerOrder':null}}])
}
}
