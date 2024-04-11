import { Component } from '@angular/core';

@Component({
  selector: 'app-home-segment',
  templateUrl: './home-segment.component.html',
})
export class HomeSegmentComponent {

  
  onGetInTouchClick() {
    const contactSegment = document.getElementById('contact');
    if (contactSegment) {
      contactSegment.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
