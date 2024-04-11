import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeSegmentComponent } from './home-segment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [HomeSegmentComponent],
  exports: [HomeSegmentComponent],
})
export class HomeSegmentModule {}
