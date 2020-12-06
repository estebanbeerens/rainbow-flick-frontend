import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { coreReducer } from 'src/app/core/state/reducer';
import { CoreFooterComponent } from './components/core-footer/core-footer.component';
import { CoreContentComponent } from './components/content/content.component';
import { CoreSidenavComponent } from './components/core-sidenav/core-sidenav.component';
import { CoreToolbarShellComponent } from './components/core-toolbar/core-toolbar-shell/core-toolbar-shell.component';
import { CoreToolbarPresenterComponent } from './components/core-toolbar/core-toolbar-presenter/core-toolbar-presenter.component';


@NgModule({
  declarations: [
    CoreFooterComponent, 
    CoreContentComponent, 
    CoreSidenavComponent, 
    CoreToolbarShellComponent, 
    CoreToolbarPresenterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MatSidenavModule,
    StoreModule.forFeature('core', coreReducer),
  ]
})
export class CoreModule { }
