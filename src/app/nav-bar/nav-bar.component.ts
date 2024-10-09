import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public isActive: number = 1; 

  constructor(private navbarService: NavbarService, private router: Router) {}

  ngOnInit() {
    this.navbarService.isActive$.subscribe(value => {
      this.isActive = value;
    });

    this.setActiveLink(this.router.url);
    
    this.router.events.subscribe(() => {
      this.setActiveLink(this.router.url);
    });
  }

  private setActiveLink(url: string) {
    switch (url) {
      case '/':
        this.isActive = 1;
        break;
      case '/about':
        this.isActive = 2;
        break;
      case '/project':
        this.isActive = 3; 
        break;
      case '/protocols':
        this.isActive = 4; 
        break;
      default:
        this.isActive = -1; 
    }
  }

  interactNavBar(value: number, event : Event) {
    this.navbarService.interactNavBar(value, event);
  }

  @ViewChild('containerMore', {static: false}) containerMore!: ElementRef;
  @ViewChild('containerContent', {static: false}) containerContent!: ElementRef;
  @ViewChild('menuHoverImage', {static: false}) menuHoverImage!: ElementRef

  dropdown() {
    if (this.containerMore && this.containerContent && this.menuHoverImage) {
      this.containerMore.nativeElement.style.height = '350px'
      this.containerContent.nativeElement.style.transition = 'margin-top 0.7s ease-in-out, opacity 1s ease-in-out'
      this.containerContent.nativeElement.style.marginTop = '20px'
      this.containerContent.nativeElement.style.opacity = '1'
      this.menuHoverImage.nativeElement.style.opacity = '1'
      this.containerContent.nativeElement.style.pointerEvents = 'auto'
    }
  }

  dropup() {
    if (this.containerMore && this.containerContent && this.menuHoverImage) {
      this.containerMore.nativeElement.style.height = '0px'
      this.containerContent.nativeElement.style.transition = 'margin-top 0.7s ease-in-out, opacity .3s ease-in-out'
      this.containerContent.nativeElement.style.marginTop = '0'
      this.containerContent.nativeElement.style.opacity = '0'
      this.menuHoverImage.nativeElement.style.opacity = '0'
      this.containerContent.nativeElement.style.pointerEvents = 'none'
    }
  }
}
