import { Component, OnInit } from '@angular/core';
import { EmpSalaryService } from '../emp-salary.service';

@Component({
  selector: 'app-child-component',
  template:`<div> 
  <h3> child component : {{randomSalary}} </h3>

  </div>`,
  styleUrls: ['./child-component.component.css'],
  providers:[],
  viewProviders:[]
})
export class ChildComponentComponent implements OnInit {

  randomSalary;
  constructor(private objSalary:EmpSalaryService){
    this.randomSalary=objSalary.getEmpRanSalary();
  }
    ngOnInit(): void {
    }

  

}
