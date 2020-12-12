import { Component, OnInit } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { userHomeRoutes } from 'src/app/core/models/routes/user-home-routes';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  routeInfo: IRouteInfo[];

  constructor() { }

  ngOnInit(): void {
    this.routeInfo = userHomeRoutes;
  }

}
