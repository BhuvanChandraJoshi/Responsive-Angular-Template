import { Component, HostListener } from '@angular/core';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  screenWidth: number;

  constructor(private navigationService: NavigationService) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  isScreenSizeValid(): boolean {
    return this.screenWidth > 540;
  }

  slideTopNav(): boolean {
    if (this.screenWidth > 540) {
      return false;
    }
    return this.navigationService.showSideNav;
  }
}
