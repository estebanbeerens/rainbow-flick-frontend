import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';

@Component({
  selector: 'app-user-team-join-presenter',
  templateUrl: './user-team-join-presenter.component.html',
  styleUrls: ['./user-team-join-presenter.component.scss'],
})

export class UserTeamJoinPresenterComponent {

  @Input() teams: ITeamOverview[];
  @Output() onJoinTeam = new EventEmitter<String>();

  constructor(
    private _teamService: TeamService,
    private _router: Router
  ) {}

  rowClicked(teamID: string){
    this._teamService.loadTeamDetails(teamID);
    this._router.navigate([`app/user/team/details/${teamID}`]);
  }
  
  joinTeam(teamID:String){
    this.onJoinTeam.emit(teamID);
  }
}
