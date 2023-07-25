import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-fixed-sidebar',
  templateUrl: './fixed-sidebar.component.html',
  styleUrls: ['./fixed-sidebar.component.scss'],
})
export class FixedSidebarComponent implements OnInit {
  counter: any = 1;
  pageNo = 1;

  public pageActive: any = [1, 0, 0];

  constructor(private demo: DemoService) {}

  ngOnInit() {
    this.demo.behaviorSubject.subscribe((item) => {
      this.counter = item;
      this.pageActive = [0, 0, 0];
      this.pageActive[this.counter - 1] = 1;
    });
  }
}
