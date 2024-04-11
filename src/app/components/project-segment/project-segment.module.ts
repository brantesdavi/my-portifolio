import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectSegmentComponent } from './project-segment.component';
import { ProjectModule } from '../project/project.module';

@NgModule({
  imports: [CommonModule, ProjectModule],
  declarations: [ProjectSegmentComponent],
  exports: [ProjectSegmentComponent],
})
export class ProjectSegmentModule {}
