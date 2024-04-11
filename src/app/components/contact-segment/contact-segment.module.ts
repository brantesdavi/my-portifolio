import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactSegmentComponent } from './contact-segment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactSegmentComponent],
  exports: [ContactSegmentComponent],
})
export class ContactSegmentModule {}
