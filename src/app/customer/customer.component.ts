import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDataArray:any;

  constructor(private customerDetails:UserdataService) { }
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

}
