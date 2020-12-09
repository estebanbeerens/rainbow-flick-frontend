import { Component, OnInit } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { navRoutes } from 'src/app/core/models/routes/nav-routes';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  sideNavToggled: boolean;
  routes: IRouteInfo[];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.sideNavToggled.subscribe(v => this.sideNavToggled = v);
    this.routes = navRoutes;
  }

}
