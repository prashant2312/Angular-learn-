import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpSalaryService {
private randomSalary;
  constructor() {
    this.randomSalary=Math.floor(Math.random()*500);
   }
   getEmpRanSalary(){
     return this.randomSalary;
   }
}
