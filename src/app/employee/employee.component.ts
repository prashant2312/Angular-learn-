import { SalaryComponent } from './../salary/salary.component';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  @ViewChild("customTitle") customTitle: ElementRef
  @ViewChild("name") name:ElementRef
  @ViewChild("email") email:ElementRef

  constructor() { }
  ngAfterViewInit(): void {
this.customTitle.nativeElement.style.color="blue"
this.name.nativeElement.style.background="black"
this.name.nativeElement.style.color="white"
this.email.nativeElement.value="abc@gmail.com"
  }

  ngOnInit(): void {
  }

}
