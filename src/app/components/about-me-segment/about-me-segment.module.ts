import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AboutMeSegmentComponent } from './about-me-segment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutMeSegmentComponent],
  exports: [AboutMeSegmentComponent],
})
export class AboutMeSegmentModule {}
