import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private demo: DemoService) {}
  ngOnInit(): void {}
  counter = 1;
  firstLoad: Boolean = true;
  check(value: any, targetString: String) {
    if (value && targetString === 'hero') {
      this.counter = 1;
    } else if (value && targetString === 'community') {
      this.counter = 2;
      this.firstLoad = true;
    } else if (value && targetString === 'menu') {
      this.counter = 3;
    }
    this.firstLoad = false;

    this.demo.behaviorSubject.next(this.counter);
  }
}
