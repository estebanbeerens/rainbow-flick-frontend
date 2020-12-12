import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { AuthUserInRequestedParticipantsPipe } from 'src/app/shared/pipes/auth-user-in-requested-participants.pipe';
import { AuthUserInTeamPipe } from 'src/app/shared/pipes/auth-user-in-team.pipe';

@Component({
  selector: 'app-user-team-overview-shell',
  templateUrl: './user-team-overview-shell.component.html',
  styleUrls: ['./user-team-overview-shell.component.scss'],
  providers:[AuthUserInTeamPipe, AuthUserInRequestedParticipantsPipe]
})
export class UserTeamOverviewShellComponent implements OnInit {
  teams$: BehaviorSubject<ITeamOverview[]>;
  filteredTeams$ = new BehaviorSubject<ITeamOverview[]>([]);
  filterString$ = new BehaviorSubject<String>('');

  constructor(
    private _teamService: TeamService,
    private _authUserInTeamPipe: AuthUserInTeamPipe,
    private _authUserInRequestedParticipantsPipe : AuthUserInRequestedParticipantsPipe
    ) {}

  ngOnInit(): void {
    this.initializeTeams();
    this.filterString$.subscribe(() => this.updateFilteredTeams());
  }

  initializeTeams() {
    this._teamService.loadTeams();
    this.teams$ = this._teamService.teams$;
    this.teams$.subscribe(() => this.updateFilteredTeams());
  }

  searchStringChanged(searchString: String) {
    this.filterString$.next(searchString);
  }

  updateFilteredTeams() {
    let filteredTeams = this.teams$.value.filter((team) => {
      if (this._authUserInTeamPipe.transform(team) || this._authUserInRequestedParticipantsPipe.transform(team)) {
        if (
          team.companyName.includes(this.filterString$.value.toString()) ||
          team.name.includes(this.filterString$.value.toString())
        ) {
          return true;
        }
      }
      return false;
    });
    this.filteredTeams$.next(filteredTeams);
  }
}
