import { Component, OnInit } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { userHomeRoutes } from 'src/app/core/models/routes/user-home-routes';

@Component({
  selector: 'app-shared-home-shell',
  templateUrl: './shared-home-shell.component.html',
  styleUrls: ['./shared-home-shell.component.scss']
})
export class SharedHomeShellComponent implements OnInit {

  routeInfo: IRouteInfo[];

  constructor() { }

  ngOnInit(): void {
    // TODO : Check if is admin for routeInfo
    this.routeInfo = userHomeRoutes;
  }

}
