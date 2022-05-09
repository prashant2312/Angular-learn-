import { Component, OnInit } from '@angular/core';
import { EmpSalaryService } from '../emp-salary.service';

@Component({
  selector: 'app-parent-component',
  // templateUrl: './parent-component.component.html',
  template: `<div> 
  <h3> Parent component : {{randomSalary}} </h3>
   <ng-content></ng-content>
  <h3>Child component</h3>
 <app-child-component></app-child-component>
 <app-child-component></app-child-component>
 <app-child-component></app-child-component>
 <app-child-component></app-child-component>
 <app-child-component></app-child-component>
 <app-child-component></app-child-component>
  </div>`,
  styleUrls: ['./parent-component.component.css'],
  providers: [],
  viewProviders: [EmpSalaryService]
})
export class ParentComponentComponent implements OnInit {

  randomSalary;
  constructor(private objSalary: EmpSalaryService) {
    this.randomSalary = objSalary.getEmpRanSalary();
  }
  ngOnInit(): void {
  }

}
