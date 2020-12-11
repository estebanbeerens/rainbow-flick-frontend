import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-invitation-presenter',
  templateUrl: './user-match-overview-invitation-presenter.component.html',
  styleUrls: ['./user-match-overview-invitation-presenter.component.scss']
})
export class UserMatchOverviewInvitationPresenterComponent implements OnInit {
  @Input() matches:IMatchDetail[];
 @Output() onJoinMatch = new EventEmitter<String>()
  ngOnInit(): void {
  }

  joinMatch(matchID: String){
    this.onJoinMatch.emit(matchID);
  }

}
