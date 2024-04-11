import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-segment',
  templateUrl: './about-me-segment.component.html',
})
export class AboutMeSegmentComponent {

  onGetInTouchClick() {
    const contactSegment = document.getElementById('contact');
    if (contactSegment) {
      contactSegment.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onGetResumeClick() {
    // Abrir o PDF
    const pdfPath = '../../../assets/cv_DaviBrantes_abril-2024.pdf'; // Substitua "resume.pdf" pelo nome do seu arquivo
    window.open(pdfPath, '_blank'); // Abrir o PDF em uma nova aba
  }
}
