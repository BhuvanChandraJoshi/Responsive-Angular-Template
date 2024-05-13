import { Component, HostListener } from '@angular/core';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  screenWidth: number;

  constructor(private navigationService: NavigationService) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  slideContent(): boolean {
    if(this.screenWidth > 540){
      return false;
    }
    return this.navigationService.showSideNav;
  }
}
