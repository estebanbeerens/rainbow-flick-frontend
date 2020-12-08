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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { SharedSearchbarComponent } from './components/shared-searchbar/shared-searchbar.component';

@NgModule({
  declarations: [
    SharedSpinnerComponent,
    SharedHomeShellComponent,
    SharedHomePresenterComponent,
    SharedToolbarComponent,
    SharedSearchbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatRippleModule
  ],
  exports: [
    RouterModule,
    SharedRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    SharedSpinnerComponent,
    SharedToolbarComponent,
    SharedSearchbarComponent
  ],
})
export class SharedModule { }
