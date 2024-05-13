import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  showSideNav: boolean;

  constructor() {
    this.showSideNav = false;
  }

  toggleSideNav(): boolean {
    this.showSideNav = !this.showSideNav;
    return this.showSideNav;
  }
}
