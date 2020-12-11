import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-future-presenter',
  templateUrl: './user-match-overview-future-presenter.component.html',
  styleUrls: ['./user-match-overview-future-presenter.component.scss'],
})
export class UserMatchOverviewFuturePresenterComponent {
  @Input() matches: IMatchDetail[];

  constructor(private _router: Router){}
  
  goToDetails(matchID: String){
    this._router.navigate([`app/user/match/details/${matchID}`]);
  }
}
