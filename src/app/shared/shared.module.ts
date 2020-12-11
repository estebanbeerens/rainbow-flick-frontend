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
import { SharedSearchbarComponent } from './components/shared-searchbar/shared-searchbar.component';
import { SharedPaginatorComponent } from './components/shared-paginator/shared-paginator.component';
import { SharedDateChangerComponent } from './components/shared-date-changer/shared-date-changer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { AuthUserInTeamPipe } from 'src/app/shared/pipes/auth-user-in-team.pipe';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { AuthUserTeamCaptainPipe } from 'src/app/shared/pipes/auth-user-team-captain.pipe';
import { AuthUserInRequestedParticipantsPipe } from 'src/app/shared/pipes/auth-user-in-requested-participants.pipe';
import { AuthUserWonMatchPipe } from 'src/app/shared/pipes/auth-user-won-match.pipe';
import { MatchScorePipe } from 'src/app/shared/pipes/match-score.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { TeamDetailToOverviewPipe } from 'src/app/shared/pipes/team-details-to-overview.pipe';


@NgModule({
  declarations: [
    SharedSpinnerComponent,
    SharedHomeShellComponent,
    SharedHomePresenterComponent,
    SharedToolbarComponent,
    SharedSearchbarComponent,
    SharedPaginatorComponent,
    AuthUserInTeamPipe,
    TruncatePipe,
    AuthUserTeamCaptainPipe,
    SharedDateChangerComponent,
    AuthUserInRequestedParticipantsPipe,
    AuthUserWonMatchPipe,
    MatchScorePipe,
    SearchFilterPipe,
    TeamDetailToOverviewPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatRippleModule,
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
    SharedSearchbarComponent,
    SharedPaginatorComponent,
    AuthUserInTeamPipe,
    TruncatePipe,
    AuthUserTeamCaptainPipe,
    SharedDateChangerComponent,
    AuthUserInRequestedParticipantsPipe,
    AuthUserWonMatchPipe,
    MatchScorePipe,
    TeamDetailToOverviewPipe
  ],
})
export class SharedModule {}
