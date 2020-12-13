import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-future-presenter',
  templateUrl: './user-match-overview-future-presenter.component.html',
  styleUrls: ['./user-match-overview-future-presenter.component.scss'],
})
export class UserMatchOverviewFuturePresenterComponent {
  @Input() matches: IMatchDetail[];
  @Output() onStartMatch = new EventEmitter<String>();
  constructor(private _router: Router){}
  
  goToDetails(matchID: String){
    this._router.navigate([`app/user/match/details/${matchID}`]);
  }

  startMatch(matchID: String){
    this.onStartMatch.emit(matchID);
  }
}
