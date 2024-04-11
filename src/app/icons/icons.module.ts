import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBars, faGlobe, faMask, faObjectUngroup, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faArrowRight, faInstagram, faLinkedin, 
      faGlobe, faObjectUngroup, faGithub, faBars, faXmark);
  }
}
