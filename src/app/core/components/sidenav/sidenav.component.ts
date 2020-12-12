import { Component, OnInit } from '@angular/core';
import { adminSidenavRoutes } from 'src/app/core/models/routes/admin-sidenav-routes';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { UserService } from 'src/app/services/user.service';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
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
  authUser: UserAuth;

  constructor(
    private _sharedService: SharedService,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._sharedService.sideNavToggled.subscribe(v => this.sideNavToggled = v);
    this._sharedService.darkMode.subscribe(v => this.darkMode = v);
    this.routeInfo = adminSidenavRoutes;
    this._userService.userAuth$.subscribe((value) => this.authUser = value);
  }

  toggleSideNav(): void {
    this._sharedService.toggleSideNav();
  }

  logout(): void {
    this._userService.logout();
  }

  toggleDarkMode(): void {
    if (this.darkMode == 'light') {
      this._sharedService.setDarkMode('dark');
    } else {
      this._sharedService.setDarkMode('light');
    }
  }

}
