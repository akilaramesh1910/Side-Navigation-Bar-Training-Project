import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  isControlRoomHovered: boolean = false;
  isDashboardHovered: boolean = false;
  isOrdersHovered: boolean = false;
  isShipmentsHovered: boolean = false;
  isLoadHovered: boolean = false;
  isMasterListHovered: boolean = false;
  isReportsHovered: boolean = false;
  isAccountingHovered: boolean = false;
  isSettingsHovered: boolean = false;
  isSidenavHovered: boolean = false;

  onSidenavEnter() {
    this.isSidenavHovered = true;
  }

  onSidenavLeave() {
    this.isSidenavHovered = false;
  }
  
  onMouseEnter(item: string) {
    switch(item) {
      case 'controlRoom':
        this.isControlRoomHovered = true;
        break;
      case 'dashboard':
        this.isDashboardHovered = true;
        break;
      case 'orders':
        this.isOrdersHovered = true;
        break;
      case 'shipments':
        this.isShipmentsHovered = true;
        break;
      case 'load':
        this.isLoadHovered = true;
        break;
      case 'masterList':
        this.isMasterListHovered = true;
        break;
      case 'reports':
        this.isReportsHovered = true;
        break;
      case 'accounting':
        this.isAccountingHovered = true;
        break;
      case 'settings':
        this.isSettingsHovered = true;
        break;
      default:
        break;
    }
  }

  onMouseLeave(item: string) {
    switch(item) {
      case 'controlRoom':
        this.isControlRoomHovered = false;
        break;
      case 'dashboard':
        this.isDashboardHovered = false;
        break;
      case 'orders':
        this.isOrdersHovered = false;
        break;
      case 'shipments':
        this.isShipmentsHovered = false;
        break;
      case 'load':
        this.isLoadHovered = false;
        break;
      case 'masterList':
        this.isMasterListHovered = false;
        break;
      case 'reports':
        this.isReportsHovered = false;
        break;
      case 'accounting':
        this.isAccountingHovered = false;
        break;
      case 'settings':
        this.isSettingsHovered = false;
        break;
      default:
        break;
    }
  }
}

















// import { Component } from '@angular/core';

// interface SideNavToggle{
//   screenWidth: number;
//   collapsed: boolean;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'sidebar';

//   isSideNavCollapsed = false;
//   screenWidth = 0;

//   onToggleSideNav(data: SideNavToggle): void {
//     this.screenWidth = data.screenWidth;
//     this.isSideNavCollapsed = data.collapsed;
//   }
// }
