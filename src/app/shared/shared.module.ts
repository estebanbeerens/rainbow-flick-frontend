import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedSpinnerComponent } from './components/shared-spinner/shared-spinner.component';
import { SharedRoutingModule } from 'src/app/shared/shared-routing.module';
import { SharedHomeShellComponent } from './components/shared-home/shared-home-shell/shared-home-shell.component';
import { SharedHomePresenterComponent } from './components/shared-home/shared-home-presenter/shared-home-presenter.component';
import { SharedToolbarComponent } from './components/shared-toolbar/shared-toolbar.component';

@NgModule({
  declarations: [
    SharedSpinnerComponent,
    SharedHomeShellComponent,
    SharedHomePresenterComponent,
    SharedToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    RouterModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    SharedSpinnerComponent,
    SharedToolbarComponent
  ],
})
export class SharedModule { }
