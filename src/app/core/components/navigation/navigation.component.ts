import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { navRoutes } from 'src/app/core/models/routes/nav-routes';
import { SharedService } from 'src/app/shared/services/shared.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { adminNavRoutes } from 'src/app/core/models/routes/admin-nav-routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isAdmin: boolean;
  sideNavToggled: boolean;
  routes: IRouteInfo[];

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkRoutes();
    this.sharedService.sideNavToggled.subscribe(v => this.sideNavToggled = v);
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.checkRoutes();
      }
    });
  }

  checkRoutes(): void {
    if (this.router.url.includes('admin')) {
      this.isAdmin = true;
      this.routes = adminNavRoutes;
    } else {
      this.isAdmin = false;
      this.routes = navRoutes;
    }
  }

}
