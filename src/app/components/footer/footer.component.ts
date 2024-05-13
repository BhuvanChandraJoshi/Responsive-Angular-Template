import { Component, HostListener } from '@angular/core';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  screenWidth: number;

  constructor(private navigationService: NavigationService) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  slideFooter(): boolean {
    if (this.screenWidth > 540) {
      return false;
    }
    return this.navigationService.showSideNav;
  }
}
