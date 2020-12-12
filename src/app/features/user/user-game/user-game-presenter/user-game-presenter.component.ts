import { Component, Input, OnInit } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-game-presenter',
  templateUrl: './user-game-presenter.component.html',
  styleUrls: ['./user-game-presenter.component.scss']
})
export class UserGamePresenterComponent {
  @Input() match: IMatchDetail;

}
