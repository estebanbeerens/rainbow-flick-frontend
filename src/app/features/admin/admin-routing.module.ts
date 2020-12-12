import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from 'src/app/features/admin/admin-home/admin-home.component';
import { AdminMatchDetailsShellComponent } from 'src/app/features/admin/admin-match/admin-match-details/admin-match-details-shell/admin-match-details-shell.component';
import { AdminMatchOverviewShellComponent } from 'src/app/features/admin/admin-match/admin-match-overview/admin-match-overview-shell/admin-match-overview-shell.component';
import { AdminTableDetailsShellComponent } from 'src/app/features/admin/admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component';
import { AdminTableOverviewShellComponent } from 'src/app/features/admin/admin-table/admin-table-overview/admin-table-overview-shell/admin-table-overview-shell.component';
import { AdminTeamDetailsShellComponent } from 'src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component';
import { AdminTeamOverviewShellComponent } from 'src/app/features/admin/admin-team/admin-team-overview/admin-team-overview-shell/admin-team-overview-shell.component';
import { AdminUserDetailsShellComponent } from 'src/app/features/admin/admin-user/admin-user-details/admin-user-details-shell/admin-user-details-shell.component';
import { AdminUserOverviewShellComponent } from 'src/app/features/admin/admin-user/admin-user-overview/admin-user-overview-shell/admin-user-overview-shell.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminHomeComponent
  },
  {
    path: 'table/overview',
    component: AdminTableOverviewShellComponent,
  },
  {
    path: 'table/details/:id',
    component: AdminTableDetailsShellComponent,
  },
  {
    path: 'table',
    redirectTo: 'table/overview',
  },
  {
    path: 'team/overview',
    component: AdminTeamOverviewShellComponent,
  },
  {
    path: 'team/details/:id',
    component: AdminTeamDetailsShellComponent,
  },
  {
    path: 'team',
    redirectTo: 'team/overview',
  },
  {
    path: 'user/overview',
    component: AdminUserOverviewShellComponent,
  },
  {
    path: 'user/details/:id',
    component: AdminUserDetailsShellComponent,
  },
  {
    path: 'user',
    redirectTo: 'user/overview',
  },
  {
    path: 'match/overview',
    component: AdminMatchOverviewShellComponent,
  },
  {
    path: 'match/details/:id',
    component: AdminMatchDetailsShellComponent,
  },
  {
    path: 'match',
    redirectTo: 'match/overview',
  },
  {
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
