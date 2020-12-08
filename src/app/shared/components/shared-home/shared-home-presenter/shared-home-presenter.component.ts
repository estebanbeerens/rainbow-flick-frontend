import { Component, Input } from '@angular/core';
import { IRouteInfo } from 'src/app/core/models/routes/route-info';

@Component({
  selector: 'app-shared-home-presenter',
  templateUrl: './shared-home-presenter.component.html',
  styleUrls: ['./shared-home-presenter.component.scss']
})
export class SharedHomePresenterComponent {

  @Input() routeInfo: IRouteInfo[];

}
