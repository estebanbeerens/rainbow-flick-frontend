import { Component, OnInit } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';
import { userRoutes } from 'src/app/core/models/routes/user-routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  routes: IRouteInfo[];

  constructor() { }

  ngOnInit(): void {
    this.routes = userRoutes;
  }

}
