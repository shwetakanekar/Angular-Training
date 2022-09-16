import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  displayValue = '';
  logData(data: string) {
    console.log(data);
  }

  getValue(val: string) {
    this.displayValue = val;
  }
}
