import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';

@Component({
  selector: 'app-user-team-join-presenter',
  templateUrl: './user-team-join-presenter.component.html',
  styleUrls: ['./user-team-join-presenter.component.scss'],
})

export class UserTeamJoinPresenterComponent {

  @Input() teams: ITeamOverview[];
  @Output() onJoinTeam = new EventEmitter<String>();
  
  joinTeam(teamID:String){
    this.onJoinTeam.emit(teamID);
  }
}
