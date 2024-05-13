import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'side-nav-toogle-button',
  templateUrl: './side-nav-toogle-button.component.html',
  styleUrls: ['./side-nav-toogle-button.component.css']
})
export class SideNavToogleButtonComponent {
  isSideNavOpen: boolean;

  constructor(private navigationService: NavigationService) {
    this.isSideNavOpen = this.navigationService.showSideNav;
  }

  toggleMenu() {
    console.log("Clicked")
    this.navigationService.toggleSideNav();
    this.isSideNavOpen = this.navigationService.showSideNav;
  }
}
