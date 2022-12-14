import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from 'models/product';
import { ApiService } from './services/api.service';

import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  message: string = 'Hello from app-component';
  todaysDate = new Date();
  employees: any[] = [];
  products: Product[] = [];

  constructor(
    private employeeService: EmployeeService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeeData();
    this.getProducts();
  }

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

  onRegistrationFormSubmit(formData: any) {
    console.log(formData);
  }

  registrationFormReactive = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onReactiveFormSubmit() {
    console.log(this.registrationFormReactive.value);
  }

  // getters for reactive forms - these are used for validations
  get emailReactive() {
    return this.registrationFormReactive.get('email');
  }

  get passwordReactive() {
    return this.registrationFormReactive.get('password');
  }

  getProducts() {
    this.apiService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addNewProduct(product: any, productForm: NgForm) {
    this.apiService.addProduct(product).subscribe((prod) => {
      console.log('product added', prod);
      this.getProducts();
      productForm.reset();
    });
  }
}
