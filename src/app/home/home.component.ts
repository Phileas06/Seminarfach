import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  websiteSections: number[] = [1, 2, 3, 4];
  websiteSectionsImages: string[] = [
    '/images/zuhause.png',
    '/images/benutzer.png',
    '/images/project.png',
    '/images/privacy.png'
  ];

  public isActive: number = 1;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.isActive$.subscribe(value => {
      this.isActive = value;
    });
    const imgElement = document.querySelector('.img-1') as HTMLImageElement;

    if (imgElement) {
        imgElement.onload = () => {
            imgElement.classList.add('loaded');
        };
    }
  }

  interactNavBar(value: number, event: Event) {
    this.navbarService.interactNavBar(value, event);
  }

  getSectionName(section: number): string {
    switch (section) {
      case 1: return 'Startseite';
      case 2: return 'Über Uns';
      case 3: return 'Projekt';
      case 4: return 'Datenschutz';
      default: return '';
    }
  }

  getHref(section: number): string {
    switch (section) {
        case 1:
            return '/'; // Standard für Home
        case 2:
            return '/about';
        case 3:
            return '/project';
        case 4:
            return '/privacy';
        default:
            return '/'; // Fallback
    }
}
}
