import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  screenWidth: number;

  constructor(private navigationService: NavigationService) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  isScreenSizeValidAndMenuIsOpen(): boolean {
    return this.screenWidth <= 540 && this.navigationService.showSideNav;
  }
}
