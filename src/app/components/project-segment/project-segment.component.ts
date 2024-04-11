import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-segment',
  templateUrl: './project-segment.component.html',
})
export class ProjectSegmentComponent {

  @Input() projects: any[] | undefined;
}
