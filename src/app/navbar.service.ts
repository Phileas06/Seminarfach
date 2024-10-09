import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private activeSubject = new BehaviorSubject<number>(1); 
  public isActive$ = this.activeSubject.asObservable(); 

  constructor() {}

  interactNavBar(value: number, event: Event) {
    this.activeSubject.next(value); 
  }
}
