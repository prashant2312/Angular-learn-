import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
empSalary:number=0;
message:string=""  
constructor() { }
salaryIncrement(){
  this.empSalary=this.empSalary+500;
  this.message="employee incremented salary  : "
}
salaryDecrement(){
  this.empSalary=this.empSalary-500;
  this.message="employee decremented salary : ";
}
  ngOnInit(): void {
  }

}
