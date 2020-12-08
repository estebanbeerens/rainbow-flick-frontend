import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreContentComponent } from './components/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    CoreContentComponent,
    NavigationComponent, 
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
