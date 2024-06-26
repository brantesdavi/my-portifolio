import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  dropdown: boolean = false

  toggleDropdown(){
    this.dropdown = !this.dropdown
  }
  
  onGetInTouchClick(id: string) {
    const segment = document.getElementById(id);
    if (segment) {
      segment.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
