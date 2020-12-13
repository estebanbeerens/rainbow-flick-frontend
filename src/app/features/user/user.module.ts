import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserRankingShellComponent } from 'src/app/features/user/user-ranking/user-ranking-shell/user-ranking-shell.component';
import { UserRankingPresenterComponent } from 'src/app/features/user/user-ranking/user-ranking-presenter/user-ranking-presenter.component';
import { UserTableOverviewPresenterComponent } from './user-table/user-table-overview/user-table-overview-presenter/user-table-overview-presenter.component';
import { UserTableOverviewShellComponent } from './user-table/user-table-overview/user-table-overview-shell/user-table-overview-shell.component';
import { UserTableDetailsPresenterComponent } from './user-table/user-table-details/user-table-details-presenter/user-table-details-presenter.component';
import { UserTableDetailsShellComponent } from './user-table/user-table-details/user-table-details-shell/user-table-details-shell.component';
import { UserMatchOverviewPresenterComponent } from './user-match/user-match-overview/user-match-overview-presenter/user-match-overview-presenter.component';
import { UserMatchOverviewShellComponent } from './user-match/user-match-overview/user-match-overview-shell/user-match-overview-shell.component';
import { UserMatchDetailsPresenterComponent } from './user-match/user-match-details/user-match-details-presenter/user-match-details-presenter.component';
import { UserMatchDetailsShellComponent } from './user-match/user-match-details/user-match-details-shell/user-match-details-shell.component';
import { UserTeamOverviewPresenterComponent } from './user-team/user-team-overview/user-team-overview-presenter/user-team-overview-presenter.component';
import { UserTeamOverviewShellComponent } from './user-team/user-team-overview/user-team-overview-shell/user-team-overview-shell.component';
import { UserTeamDetailsPresenterComponent } from './user-team/user-team-details/user-team-details-presenter/user-team-details-presenter.component';
import { UserTeamDetailsShellComponent } from './user-team/user-team-details/user-team-details-shell/user-team-details-shell.component';
import { UserMatchCreatePresenterComponent } from './user-match/user-match-create/user-match-create-presenter/user-match-create-presenter.component';
import { UserMatchCreateShellComponent } from './user-match/user-match-create/user-match-create-shell/user-match-create-shell.component';
import { UserGameShellComponent } from './user-game/user-game-shell/user-game-shell.component';
import { UserGamePresenterComponent } from './user-game/user-game-presenter/user-game-presenter.component';
import { UserMatchOverviewInvitationPresenterComponent } from './user-match/user-match-overview/components/user-match-overview-invitation/user-match-overview-invitation-presenter/user-match-overview-invitation-presenter.component';
import { UserMatchOverviewInvitationShellComponent } from './user-match/user-match-overview/components/user-match-overview-invitation/user-match-overview-invitation-shell/user-match-overview-invitation-shell.component';
import { UserMatchOverviewFuturePresenterComponent } from './user-match/user-match-overview/components/user-match-overview-future/user-match-overview-future-presenter/user-match-overview-future-presenter.component';
import { UserMatchOverviewFutureShellComponent } from './user-match/user-match-overview/components/user-match-overview-future/user-match-overview-future-shell/user-match-overview-future-shell.component';
import { UserMatchOverviewPlayedPresenterComponent } from './user-match/user-match-overview/components/user-match-overview-played/user-match-overview-played-presenter/user-match-overview-played-presenter.component';
import { UserMatchOverviewPlayedShellComponent } from './user-match/user-match-overview/components/user-match-overview-played/user-match-overview-played-shell/user-match-overview-played-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserTeamInputShellComponent } from './user-team/user-team-input/user-team-input-shell/user-team-input-shell.component';
import { UserTeamInputPresenterComponent } from './user-team/user-team-input/user-team-input-presenter/user-team-input-presenter.component';
import { UserTeamJoinShellComponent } from './user-team/user-team-join/user-team-join-shell/user-team-join-shell.component';
import { UserTeamJoinPresenterComponent } from './user-team/user-team-join/user-team-join-presenter/user-team-join-presenter.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileShellComponent } from './user-profile/user-profile-shell/user-profile-shell.component';
import { UserProfilePresenterComponent } from './user-profile/user-profile-presenter/user-profile-presenter.component';

@NgModule({
  declarations: [
    UserRankingShellComponent,
    UserRankingPresenterComponent,
    UserTableOverviewPresenterComponent,
    UserTableOverviewShellComponent,
    UserTableDetailsPresenterComponent,
    UserTableDetailsShellComponent,
    UserMatchOverviewPresenterComponent,
    UserMatchOverviewShellComponent,
    UserMatchDetailsPresenterComponent,
    UserMatchDetailsShellComponent,
    UserTeamOverviewPresenterComponent,
    UserTeamOverviewShellComponent,
    UserTeamDetailsPresenterComponent,
    UserTeamDetailsShellComponent,
    UserMatchCreatePresenterComponent,
    UserMatchCreateShellComponent,
    UserGameShellComponent,
    UserGamePresenterComponent,
    UserMatchOverviewInvitationPresenterComponent,
    UserMatchOverviewInvitationShellComponent,
    UserMatchOverviewFuturePresenterComponent,
    UserMatchOverviewFutureShellComponent,
    UserMatchOverviewPlayedPresenterComponent,
    UserMatchOverviewPlayedShellComponent,
    UserTeamInputShellComponent,
    UserTeamInputPresenterComponent,
    UserTeamJoinShellComponent,
    UserTeamJoinPresenterComponent,
    UserHomeComponent,
    UserProfileShellComponent,
    UserProfilePresenterComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ], 
  providers: [
    DatePipe
  ]
})
export class UserModule { }
