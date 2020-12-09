import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminTableOverviewShellComponent } from './admin-table/admin-table-overview/admin-table-overview-shell/admin-table-overview-shell.component';
import { AdminTableOverviewPresenterComponent } from './admin-table/admin-table-overview/admin-table-overview-presenter/admin-table-overview-presenter.component';
import { AdminTableDetailsShellComponent } from './admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component';
import { AdminMatchDetailsShellComponent } from './admin-match/admin-match-details/admin-match-details-shell/admin-match-details-shell.component';
import { AdminMatchDetailsPresenterComponent } from 'src/app/features/admin/admin-match/admin-match-details/admin-match-details-presenter/admin-match-details-presenter.component';
import { AdminMatchOverviewShellComponent } from 'src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-shell/admin-match-overview-shell.component';
import { AdminTableDetailsPresenterComponent } from './admin-table/admin-table-details/admin-table-details-presenter/admin-table-details-presenter.component';
import { AdminTeamOverviewPresenterComponent } from './admin-team/admin-team-overview/admin-team-overview-presenter/admin-team-overview-presenter.component';
import { AdminTeamOverviewShellComponent } from 'src/app/features/admin/admin-team/admin-team-overview/admin-team-overview-shell/admin-team-overview-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
declarations: [AdminTableOverviewShellComponent,
    AdminTableOverviewPresenterComponent,
    AdminTableDetailsShellComponent,
    AdminTableDetailsPresenterComponent,
    AdminTeamOverviewPresenterComponent,
    AdminTeamOverviewShellComponent,
    AdminTableDetailsPresenterComponent, 
    AdminTableDetailsShellComponent, 
    AdminTeamOverviewPresenterComponent, 
    AdminTeamOverviewShellComponent, 
    AdminTableDetailsPresenterComponent, 
    AdminTableDetailsShellComponent, 
    AdminTeamOverviewPresenterComponent, 
    AdminMatchOverviewShellComponent, 
    AdminMatchDetailsPresenterComponent, 
    AdminMatchDetailsShellComponent],
imports: [
  CommonModule,
  AdminRoutingModule,
  SharedModule
]
})
export class AdminModule { }
