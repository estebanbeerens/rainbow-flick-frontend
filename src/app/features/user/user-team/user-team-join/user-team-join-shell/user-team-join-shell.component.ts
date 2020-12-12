import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { AuthUserInRequestedParticipantsPipe } from 'src/app/shared/pipes/auth-user-in-requested-participants.pipe';
import { AuthUserInTeamPipe } from 'src/app/shared/pipes/auth-user-in-team.pipe';

@Component({
  selector: 'app-user-team-join-shell',
  templateUrl: './user-team-join-shell.component.html',
  styleUrls: ['./user-team-join-shell.component.scss'],
  providers: [AuthUserInTeamPipe, AuthUserInRequestedParticipantsPipe],
})
export class UserTeamJoinShellComponent implements OnInit {
  teams$: BehaviorSubject<ITeamOverview[]>;
  filterString$ = new BehaviorSubject<String>('');
  filteredTeams$ = new BehaviorSubject<ITeamOverview[]>([]);

  constructor(
    private _teamService: TeamService,
    private _authUserInTeamPipe: AuthUserInTeamPipe,
    private _authUserInRequestedParticipantsPipe: AuthUserInRequestedParticipantsPipe,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.teams$ = this._teamService.teams$;
    this.teams$.subscribe(() => this.filterTeams());
  }
  joinTeam(teamID: String){
    this._teamService.joinTeam(teamID, {id: this._userService.userAuth$.value.id.toString()});
  }

  filterTeams() {
    let filteredTeams = this.teams$.value
      .filter((team) => {
        if (this._authUserInTeamPipe.transform(team) || this._authUserInRequestedParticipantsPipe.transform(team)) {
          return false;
        }
        return true;
      })
      .filter(
        (team) =>
          team.companyName.includes(this.filterString$.value.toString()) ||
          team.name.includes(this.filterString$.value.toString())
      );
      this.filteredTeams$.next(filteredTeams);
      console.log("filtered Team: ", filteredTeams)
  }
}
