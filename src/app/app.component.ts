import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI_Test';
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event: any) {
      // console.debug("Scroll Event", event);
    }

  // onScrollPage(event: any) {
  //  console.log('scroll', event);
  // }
}
