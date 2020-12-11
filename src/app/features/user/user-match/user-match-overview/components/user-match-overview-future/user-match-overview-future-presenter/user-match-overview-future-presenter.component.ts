import { Component, Input } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-future-presenter',
  templateUrl: './user-match-overview-future-presenter.component.html',
  styleUrls: ['./user-match-overview-future-presenter.component.scss'],
})
export class UserMatchOverviewFuturePresenterComponent {
  @Input() matches: IMatchDetail[];
}
