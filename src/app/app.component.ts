import { UserdataService } from './userdata.service';
import { HostBinding, HostListener, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs'
import { Employee } from './empinterface'
import { Address } from './empaddressinterface'
import * as $ from 'jquery'
import { CookieService } from 'ngx-cookie-service';
import {EmpSalaryService} from "./emp-salary.service"
// interface CombineInterface extends Employee,Address{}
// interface Order{
//   TotalPrice(price:number,quantity:number):number
// }
// interface Customer{
//   [index:number]:string
// }
// let customer:Customer=["John","Petter","Jullie"]
// console.log(customer);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserdataService]
})

export class AppComponent {
  title = 'AngularTutorialebsite';

  // myArr=[
  //   {
  //     name:"prashant",
  //     age:24,
  //     city:"XYZ"
  //   },
  //   {
  //     name:"Kum",
  //     age:25,
  //     city:"DFG"
  //   },
  //   {
  //     name:"Dilshad",
  //     age:26,
  //     city:"PQR"
  //   },
  //   {
  //     name:"Noman",
  //     age:27,
  //     city:"ABC"
  //   }
  // ]

  // isLogin=true
  // name="Pradeep"  

  // choice=""
  // selectColor(val:any){
  //   console.log(val);
  //   this.choice=val.target.value
  // }

  // isLoggedIn=false
  // userName="admin1"
  // score=60;


  // employee = [
  //   {
  //     name: "Dilshad",
  //     age: 26,
  //     city: "PQR",
  //     gender: 'Male',
  //     qualification: ["B.tect", "M.tech", "P.H.D"]
  //   },
  //   {
  //     name: "Jishan",
  //     age: 23,
  //     city: "ABC",
  //     gender: 'Female',

  //     qualification: ["B.SC", "M.SC", "M.tech", "P.H.D"]

  //   }, {
  //     name: "Karim",
  //     age: 25,
  //     gender: 'Female',
  //     city: "MON",
  //     qualification: ["B.SC", "M.SC"]

  //   }, {
  //     name: "Naushad",
  //     age: 21,
  //     gender: 'Female',
  //     city: "CHO",
  //     qualification: ["B.CA", "M.C.A"]

  //   }, {
  //     name: "Dulkar",
  //     gender: 'Male',
  //     age: 29,
  //     city: "ROM"
  //   }, {
  //     name: "Dilshad",
  //     gender: 'Female',
  //     age: 26,
  //     city: "DOOM"
  //   },
  // ]

  // // loadMore(){
  // //   this.employee=[
  // //     {
  // //      name:"Dilshad",
  // //      age:26,
  // //      city:"PQR"
  // //    },
  // //    {
  // //      name:"Jishan",
  // //      age:23,
  // //      city:"ABC"
  // //    },{
  // //      name:"Karim",
  // //      age:25,
  // //      city:"MON"
  // //    },{
  // //      name:"Naushad",
  // //      age:21,
  // //      city:"CHO"
  // //    },{
  // //      name:"Dulkar",
  // //      age:29,
  // //      city:"ROM"
  // //    },{
  // //      name:"Dilshad",
  // //      age:26,
  // //      city:"DOOM"
  // //    },
  // //    {
  // //     name:"Suresh",
  // //     age:26,
  // //     city:"Moob"
  // //   },{
  // //     name:"Kureshi",
  // //     age:26,
  // //     city:"jOOM"
  // //   },
  // // ]
  // // }

  // getEmployeeRecord(index: number, employee: any) {
  //   return employee.name;
  // }
  // constructor(private route: Router, private fb: FormBuilder) { }
  // date = Date.now();
  // goToLogin() {
  //   this.route.navigate(["/login"]);
  // }
  // user = {
  //   name: "Prashant Joshi",
  //   email: "prashant.joshi@tietoevry.com",
  //   mobile: 1234567890
  // }
  // formSubmit(val: any) {
  //   console.log(val.value);
  //   console.table(val.value)
  //   var name = val.name
  //   var email = val.email
  // }
  // // contactForm=new FormGroup({
  // //   yourname:new FormControl(""),
  // //   email:new FormControl(""),
  // //   mobile:new FormControl("")
  // // })

  // contactForm = this.fb.group({
  //   yourname: ['', [Validators.required, Validators.minLength(3)]],
  //   email: ['abc@gmail.com', [Validators.required, Validators.email]],
  //   mobile: ['', Validators.required]
  // })
  // postData() {
  //   const name = this.contactForm.get('yourname').value;
  //   const email = this.contactForm.get('email').value;
  //   const mobile = this.contactForm.get('mobile').value;
  //   console.log(name, email, mobile);
  // }
  // setValue() {
  //   this.contactForm.patchValue({
  //     "yourname": "prashant",
  //     "email": "a@gmail.com",
  //   })
  // }
  // name=""
  // email=""
  // mobile:any
  // constructor(private userDataService:UserdataService){
  //   let userData=this.userDataService.getUserData();
  //   // console.log(userData.address);
  //   this.name=userData.name
  //   this.email=userData.email
  //   this.mobile=userData.mobile
  // }

  // userData$:Observable<any>;
  // constructor(private userDataService: UserdataService) {
  //   // let userInfo=this.userDataService.getUserDate();
  //   // console.log(userInfo);
  //   // userDataService.getUserDate().subscribe(data => {
  //   //   this.userData=data
  //   // });

  // this.userData$=this.userDataService.getUserDate();  
  // }

  //   constructor() {

  //   }

  //   getData() {
  //     let companyEmp:CombineInterface   = {
  //       name: "1234"+23123234,
  //       age: 24,
  //       email: "abc@gmail.com",
  //       phone: 1234567890,
  //       street: 'Bhaglpur',
  //       city: 'Jaunpur',
  //       pincode: 123456
  //     }
  //     return companyEmp;
  //   }
  // totalAmount:Order={
  //   TotalPrice: function (price: number, quantity: number): number {
  //     return price*quantity;
  //   }
  // }
  // constructor() {

  // }
  // display=true
  // employees = [
  //   { "name": "prashant1", "email": "abc@gmail.com", "salary": 240000 },
  //   { "name": "prashant2", "email": "abcd@gmail.com", "salary": 4544 },
  //   { "name": "prashant3", "email": "abcdef@gmail.com", "salary": 545454 },
  // ]


  // display = false
  // data = {
  //   "phone": 1234567890
  // }
  // ngOnInit(): void {
  //   $(document).ready(function () {
  //     $("button").click(function () {
  //       $("#div1").fadeIn();
  //       $("#div2").fadeIn("slow");
  //       $("#div3").fadeIn(3000);
  //     });
  //   });
  // }






  // @HostBinding('style.color') textColor
  // constructor(private eleRef:ElementRef){
  //   this.textColor="red"
  // }

  // @HostListener("click") onClick(){
  //   alert("window click")
  //   this.textColor="green"
  // }
  // @HostListener("mouseover") onMouseHover(){
  //   this.textColor="yellow"
  // }
  // @HostListener("mouseout") onMouseOut(){
  //   this.textColor="red"
  // }
//   constructor(private cookie:CookieService) {
// cookie.set("name","prashant")
//   }

//   ngOnInit(): void {
//   }
//   storeCookie(){
//    alert("hello")
//    this.cookie.set("name","prashant")
// localStorage.setItem("n","n")
//   }


// randomSalary;
// constructor(private objSalary:EmpSalaryService){
//   this.randomSalary=objSalary.getEmpRanSalary();
// }


company_name=null;
address:any
ngOnInit():void{
  this.address={
    street:"Model",
    city:"Noida",
    pincode:123456
  }
}

}
