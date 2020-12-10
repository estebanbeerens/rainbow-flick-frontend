import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGameShellComponent } from 'src/app/features/user/user-game/user-game-shell/user-game-shell.component';
import { UserMatchCreateShellComponent } from 'src/app/features/user/user-match/user-match-create/user-match-create-shell/user-match-create-shell.component';
import { UserMatchDetailsShellComponent } from 'src/app/features/user/user-match/user-match-details/user-match-details-shell/user-match-details-shell.component';
import { UserMatchOverviewShellComponent } from 'src/app/features/user/user-match/user-match-overview/user-match-overview-shell/user-match-overview-shell.component';
import { UserRankingShellComponent } from 'src/app/features/user/user-ranking/user-ranking-shell/user-ranking-shell.component';
import { UserTableDetailsShellComponent } from 'src/app/features/user/user-table/user-table-details/user-table-details-shell/user-table-details-shell.component';
import { UserTableOverviewShellComponent } from 'src/app/features/user/user-table/user-table-overview/user-table-overview-shell/user-table-overview-shell.component';
import { UserTeamDetailsShellComponent } from 'src/app/features/user/user-team/user-team-details/user-team-details-shell/user-team-details-shell.component';
import { UserTeamOverviewShellComponent } from 'src/app/features/user/user-team/user-team-overview/user-team-overview-shell/user-team-overview-shell.component';

const routes: Routes = [{
  path: 'ranking',
  component: UserRankingShellComponent,
},
{
  path: 'table/overview',
  component: UserTableOverviewShellComponent,
},
{
  path: 'table/details/:id',
  component: UserTableDetailsShellComponent,
},
{
  path: 'match/overview',
  component: UserMatchOverviewShellComponent,
},
{
  path: 'match/details/:id',
  component: UserMatchDetailsShellComponent,
},
{
  path: 'match/create/',
  component: UserMatchCreateShellComponent,
},
{
  path: 'team/overview',
  component: UserTeamOverviewShellComponent,
},
{
  path: 'team/details/:id',
  component: UserTeamDetailsShellComponent,
},
{
  path: 'game/overview',
  component: UserGameShellComponent,
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'table/overview',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
