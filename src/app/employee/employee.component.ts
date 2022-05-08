import { SalaryComponent } from './../salary/salary.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(SalaryComponent) salaryComponent:SalaryComponent

  constructor() { }
increment(){
  this.salaryComponent.salaryIncrement();
}
decrement(){
  this.salaryComponent.salaryDecrement();
}
  ngOnInit(): void {
  }

}
