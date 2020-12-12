import { Component, OnInit } from '@angular/core';
import { adminHomeRoutes } from 'src/app/core/models/routes/admin-home-routes';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  routeInfo: IRouteInfo[];

  constructor() { }

  ngOnInit(): void {
    this.routeInfo = adminHomeRoutes;
  }

}
