import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { RouteInfo } from 'src/app/core/models/routes/route-info';
import { routes } from 'src/app/core/models/routes/routes';
import { CoreFacade } from 'src/app/core/state/facade';

@Component({
  selector: 'rf-core-sidenav',
  templateUrl: './core-sidenav.component.html',
  styleUrls: ['./core-sidenav.component.scss']
})
export class CoreSidenavComponent implements OnInit {

  sideNavToggled$: Observable<boolean>;
  mobileQuery: MediaQueryList;
  
  menuItems: RouteInfo[];

  constructor(
    private coreFacade: CoreFacade,
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
    this.getMenuItems();
  }

  getMenuItems(): void {
    // TODO : Write if function for menu items
        this.menuItems = routes.filter(menuItem => menuItem);
  }

  onBackdropClick(): void {
    this.coreFacade.toggleSideNav();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
