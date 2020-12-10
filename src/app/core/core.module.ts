import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreContentComponent } from './components/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    CoreContentComponent,
    NavigationComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MatSidenavModule
  ],
  providers: [
    SharedService
  ]
})
export class CoreModule { }
