import { Component, Input, OnInit } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';

@Component({
  selector: 'app-shared-home',
  templateUrl: './shared-home.component.html',
  styleUrls: ['./shared-home.component.scss']
})
export class SharedHomeComponent {

  @Input() routeInfo: IRouteInfo[];

}
