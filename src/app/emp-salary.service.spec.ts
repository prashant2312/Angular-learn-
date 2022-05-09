import { TestBed } from '@angular/core/testing';

import { EmpSalaryService } from './emp-salary.service';

describe('EmpSalaryService', () => {
  let service: EmpSalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
