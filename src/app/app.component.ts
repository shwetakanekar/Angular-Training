import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  bgColor = 'skyblue';
  loginFormData: any = {};
  display = true;
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
  toDoList: any[] = [];
  randomNum: number = 0;
  inputFromChild: string = '';
  twoWayBindingData: string = '';

  logData(data: string) {
    console.log(data);
  }

  getValue(val: string) {
    this.displayValue = val;
  }

  updateCount(operation: string) {
    operation === 'plus' ? this.counter++ : this.counter--;
  }

  updateColor() {
    this.color = 'green';
    this.bgColor = 'orange';
  }

  getData(data: NgForm) {
    console.log(data);
    this.loginFormData = data;
  }

  toggle() {
    this.display = !this.display;
  }

  addTask(task: string) {
    this.toDoList.push({ id: this.toDoList.length, task });
    console.log(this.toDoList);
  }

  removeTask(id: number) {
    this.toDoList = this.toDoList.filter((task) => task.id !== id);
  }

  generateRandomNumber() {
    this.randomNum = Math.floor(Math.random() * 10);
  }

  updateData(data: string) {
    this.inputFromChild = data;
  }
}
