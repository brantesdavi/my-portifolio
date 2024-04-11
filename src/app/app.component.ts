import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { HomeSegmentModule } from './components/home-segment/home-segment.module';
import { ProjectSegmentModule } from './components/project-segment/project-segment.module';
import { AboutMeSegmentModule } from './components/about-me-segment/about-me-segment.module';
import { IconsModule } from './icons/icons.module';
import { FooterModule } from './components/footer/footer.module';
import { ContactSegmentModule } from './components/contact-segment/contact-segment.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderModule, HomeSegmentModule, IconsModule,
      ProjectSegmentModule, AboutMeSegmentModule, ContactSegmentModule, FooterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portifolio';

  projects: any[] = [
    {
      'title': "Medisync API",
      'description': "Medisync is a Spring Boot API designed for managing registrations of doctors, patients, and appointments. It uses the MySQL database and offers basic CRUD (Create, Read, Update, Delete) functionalities for each entity.",
      'skills': ["Documentação", "Java, Spring Boot, Maven e Mysql", "Backend"],
      'repo': "https://github.com/brantesdavi/medisync",
      'live': "",
      'cover': "capa-medisync.png"
    },
    {
      'title': "Eventify",
      'description': "Eventify é uma aplicação de organização de eventos, sejam eles, sociais, corporativos entre outras opções. Bem organizado e facil gerenciamento.",
      'skills': ["Angular e Tailwind", "Prototipação"],
      'repo': "https://github.com/brantesdavi/eventify-app",
      'live': "https://eventify-events.web.app",
      'design': "https://www.figma.com/file/ODhIZFehy77yABOUskcBCw/Untitled?type=design&node-id=0%3A1&mode=design&t=vu81de4xDKJXE7sg-1",
      'cover': "capa-eventify.png"
    },
  ]
}
