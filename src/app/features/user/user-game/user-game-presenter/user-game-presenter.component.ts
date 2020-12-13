import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { MatchScoreTeamPipe } from 'src/app/shared/pipes/match-score-team.pipe';

@Component({
  selector: 'app-user-game-presenter',
  templateUrl: './user-game-presenter.component.html',
  styleUrls: ['./user-game-presenter.component.scss'],
  providers: [MatchScoreTeamPipe],
})
export class UserGamePresenterComponent {
  @Input() match: IMatchDetail;

  constructor(
    private _matchService: MatchService, 
    private _matchScoreTeamPipe: MatchScoreTeamPipe,
    private _router:Router) {}

  changeScore(homeTeamScored: boolean, increment: boolean) {
    let scoreHome = Number(this._matchScoreTeamPipe.transform(this.match, true));
    let scoreAway = Number(this._matchScoreTeamPipe.transform(this.match, false));
    if (homeTeamScored) {
      scoreHome = increment ? (scoreHome += 1) : (scoreHome -= 1);
    } else {
      scoreAway = increment ? (scoreAway += 1) : (scoreAway -= 1);
    }
    this._matchService.updateScoreMatch(this.match.id, { scoreHome, scoreAway, homeTeamScored });
  }

  endMatch(){
    this._matchService.endMatch(this.match.id);
    this._router.navigate(["app/user/match/overview"]);
  }
}
