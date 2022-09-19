import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data: string = '';
  @Input() randomNumber: number = 0;

  @Output() updateDataEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
