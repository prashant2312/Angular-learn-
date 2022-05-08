import { SalaryComponent } from './../salary/salary.component';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,AfterViewInit {
  @ViewChild(SalaryComponent) salaryComponent:SalaryComponent
@ViewChild("useremailRef") usernameRef:ElementRef
  constructor() { }
  ngAfterViewInit(): void {
    this.usernameRef.nativeElement.focus();
    setTimeout(()=>{
      this.usernameRef.nativeElement.style.display="none"
      // this.usernameRef.nativeElement.style.border-bottom="none"
    },2000)
  }
increment(){
  this.salaryComponent.salaryIncrement();
}
decrement(){
  this.salaryComponent.salaryDecrement();
}
  ngOnInit(): void {
  }

}
