import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedSpinnerComponent } from './components/shared-spinner/shared-spinner.component';
import { SharedRoutingModule } from 'src/app/shared/shared-routing.module';
import { SharedToolbarComponent } from './components/shared-toolbar/shared-toolbar.component';
import { SharedSearchbarComponent } from './components/shared-searchbar/shared-searchbar.component';
import { SharedPaginatorComponent } from './components/shared-paginator/shared-paginator.component';
import { SharedDateChangerComponent } from './components/shared-date-changer/shared-date-changer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthUserInTeamPipe } from 'src/app/shared/pipes/auth-user-in-team.pipe';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { AuthUserTeamCaptainPipe } from 'src/app/shared/pipes/auth-user-team-captain.pipe';
import { AuthUserInRequestedParticipantsPipe } from 'src/app/shared/pipes/auth-user-in-requested-participants.pipe';
import { AuthUserWonMatchPipe } from 'src/app/shared/pipes/auth-user-won-match.pipe';
import { MatchScorePipe } from 'src/app/shared/pipes/match-score.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SharedHomeComponent } from 'src/app/shared/components/shared-home/shared-home.component';
import { TeamDetailToOverviewPipe } from 'src/app/shared/pipes/team-details-to-overview.pipe';
import { SharedImageUploadComponent } from './components/shared-image-upload/shared-image-upload.component';
import { IdMatchesAuthUserIdPipe } from 'src/app/shared/pipes/id-matches-auth-user.pipe';
import { MatchRequirementsMetPipe } from 'src/app/shared/pipes/match-requirements-met.pipe';
import { MatchPlayerPerTeamPipe } from 'src/app/shared/pipes/match-players-per-team.pipe';
import { MatchScoreTeamPipe } from 'src/app/shared/pipes/match-score-team.pipe';


@NgModule({
  declarations: [
    SharedSpinnerComponent,
    SharedToolbarComponent,
    SharedSearchbarComponent,
    SharedPaginatorComponent,
    SharedHomeComponent,
    AuthUserInTeamPipe,
    TruncatePipe,
    AuthUserTeamCaptainPipe,
    SharedDateChangerComponent,
    AuthUserInRequestedParticipantsPipe,
    AuthUserWonMatchPipe,
    MatchScorePipe,
    SearchFilterPipe,
    TeamDetailToOverviewPipe,
    SharedImageUploadComponent,
    IdMatchesAuthUserIdPipe,
    MatchRequirementsMetPipe,
    MatchPlayerPerTeamPipe,
    MatchScoreTeamPipe
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
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    SharedSpinnerComponent,
    SharedToolbarComponent,
    SharedSearchbarComponent,
    SharedPaginatorComponent,
    SharedHomeComponent,
    AuthUserInTeamPipe,
    TruncatePipe,
    AuthUserTeamCaptainPipe,
    SharedDateChangerComponent,
    AuthUserInRequestedParticipantsPipe,
    AuthUserWonMatchPipe,
    MatchScorePipe,
    TeamDetailToOverviewPipe,
    SharedImageUploadComponent,
    IdMatchesAuthUserIdPipe,
    MatchRequirementsMetPipe,
    MatchPlayerPerTeamPipe,
    MatchScoreTeamPipe
  ],
})
export class SharedModule {}
