import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-sidebar',
  templateUrl: './fixed-sidebar.component.html',
  styleUrls: ['./fixed-sidebar.component.scss']
})
export class FixedSidebarComponent {
  pageNo = 1;
  public pageActive = [0, 0, 1, 0, 0];
}
