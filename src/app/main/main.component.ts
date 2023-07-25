import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private demo: DemoService) { }
  ngOnInit(): void { }
  counter = 1;
  check(value: any, targetString: String) {
    if (value && targetString === 'dashboard') {
      this.counter = 1;
    } else if (value && targetString === 'community') {
      this.counter = 2;
    } else if (value && targetString === 'menu') {
      this.counter = 3;
    }
    else if (value && targetString === 'form') {
      this.counter = 4;
    }

    this.demo.behaviorSubject.next(this.counter);
  }
}
