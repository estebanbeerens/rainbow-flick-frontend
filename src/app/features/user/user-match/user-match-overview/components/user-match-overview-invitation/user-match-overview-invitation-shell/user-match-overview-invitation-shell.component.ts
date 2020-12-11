import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-invitation-shell',
  templateUrl: './user-match-overview-invitation-shell.component.html',
  styleUrls: ['./user-match-overview-invitation-shell.component.scss']
})
export class UserMatchOverviewInvitationShellComponent implements OnInit {
  @Input() matches: IMatchDetail[];
  constructor(
    private _matchService:MatchService
  ) { }

  ngOnInit(): void {
  }

  joinMatch(matchID: String){
    this._matchService.joinMatch(matchID);
  }

}
