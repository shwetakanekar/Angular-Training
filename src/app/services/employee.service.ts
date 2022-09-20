import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployeeData() {
    return [
      { name: 'Tony', email: 'tony@test.com' },
      { name: 'Peter', email: 'peter@test.com' },
      { name: 'Steve', email: 'steve@test.com' },
    ];
  }
}
