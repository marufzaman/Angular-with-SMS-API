import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  count = 0;

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  ngOnInit(): void {}
}
