import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-user-team-details-presenter',
  templateUrl: './user-team-details-presenter.component.html',
  styleUrls: ['./user-team-details-presenter.component.scss'],
})
export class UserTeamDetailsPresenterComponent {
  @Input() team: ITeamDetails;
  @Output() onDeleteMember = new EventEmitter<String>();
  @Output() onAcceptMember = new EventEmitter<String>();

  deleteMember(memberID: String) {
    console.log(memberID);
    this.onDeleteMember.emit(memberID)
  }


  acceptMember(memberID: String) {
    console.log(memberID);
    this.onAcceptMember.emit(memberID);
  }
}
