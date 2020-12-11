import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-user-team-overview-presenter',
  templateUrl: './user-team-overview-presenter.component.html',
  styleUrls: ['./user-team-overview-presenter.component.scss'],
})
export class UserTeamOverviewPresenterComponent implements OnInit {
  authUser: IUserAuth;
  @Input() teams: ITeamDetails[];
  constructor(
    private _userService: UserService,
    private _teamService: TeamService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this._userService.userAuth$.subscribe((value) => (this.authUser = value));
  }

  rowClicked(teamID: string){
    this._teamService.loadTeamDetails(teamID);
    this._router.navigate([`app/user/team/details/${teamID}`]);
  }

  deleteTeam(teamID: string){
    this._teamService.deleteTeam(teamID);
  }
}
