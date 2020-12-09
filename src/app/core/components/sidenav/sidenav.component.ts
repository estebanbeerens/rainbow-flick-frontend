import { Component, OnInit } from '@angular/core';
import { adminSidenavRoutes } from 'src/app/core/models/routes/admin-sidenav-routes';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  routeInfo: IRouteInfo[];
  sideNavToggled: boolean;
  darkMode: string;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.sideNavToggled.subscribe(v => this.sideNavToggled = v);
    this.sharedService.darkMode.subscribe(v => this.darkMode = v);
    this.routeInfo = adminSidenavRoutes;
  }

  toggleSideNav(): void {
    this.sharedService.toggleSideNav();
  }

  toggleDarkMode(): void {
    if (this.darkMode == 'light') {
      this.sharedService.setDarkMode('dark');
    } else {
      this.sharedService.setDarkMode('light');
    }
  }

}
