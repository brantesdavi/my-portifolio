import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeSegmentComponent } from './home-segment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeSegmentComponent],
  exports: [HomeSegmentComponent],
})
export class HomeSegmentModule {}
