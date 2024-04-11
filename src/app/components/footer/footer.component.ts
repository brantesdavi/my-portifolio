import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  onGetInTouchClick(id: string) {
    const segment = document.getElementById(id);
    if (segment) {
      segment.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
