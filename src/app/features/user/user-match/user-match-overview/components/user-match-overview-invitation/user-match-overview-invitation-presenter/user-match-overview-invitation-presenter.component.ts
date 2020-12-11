import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-invitation-presenter',
  templateUrl: './user-match-overview-invitation-presenter.component.html',
  styleUrls: ['./user-match-overview-invitation-presenter.component.scss'],
})
export class UserMatchOverviewInvitationPresenterComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  @Output() onJoinMatch = new EventEmitter<String>();

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  joinMatch(matchID: String) {
    this.onJoinMatch.emit(matchID);
  }

  goToDetails(matchID: String) {
    this._router.navigate([`app/user/match/details/${matchID}`]);
  }
}
