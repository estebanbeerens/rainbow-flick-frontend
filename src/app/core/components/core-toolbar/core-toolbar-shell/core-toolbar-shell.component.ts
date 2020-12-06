import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreFacade } from 'src/app/core/state/facade';

@Component({
  selector: 'rf-core-toolbar-shell',
  templateUrl: './core-toolbar-shell.component.html',
  styleUrls: ['./core-toolbar-shell.component.scss']
})
export class CoreToolbarShellComponent implements OnInit {
  
  sideNavToggled$: Observable<boolean>;
  isAdmin: boolean = false;

  constructor(
    private coreFacade: CoreFacade
  ) { }

  ngOnInit(): void {
    this.sideNavToggled$ = this.coreFacade.getSideNavToggled();
  }

  toggle(): void {
    this.coreFacade.toggleSideNav();
  }

}
