import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  displayValue = '';
  counter = 0;
  disable = false;
  show = false;
  color = 'blue';
  users = [
    {
      id: 1,
      name: 'John',
      email: 'john@test.com',
      hobbies: ['travelling', 'singing'],
    },
    {
      id: 2,
      name: 'Tom',
      email: 'tom@test.com',
      hobbies: ['cooking', 'travelling', 'coding'],
    },
    {
      id: 3,
      name: 'Jerry',
      email: 'jerry@test.com',
      hobbies: ['dancing', 'singing', 'reading'],
    },
  ];

  logData(data: string) {
    console.log(data);
  }

  getValue(val: string) {
    this.displayValue = val;
  }

  updateCount(operation: string) {
    operation === 'plus' ? this.counter++ : this.counter--;
  }
}
