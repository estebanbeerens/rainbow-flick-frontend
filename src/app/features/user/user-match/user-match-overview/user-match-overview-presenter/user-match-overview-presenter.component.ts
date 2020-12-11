import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-user-match-overview-presenter',
  templateUrl: './user-match-overview-presenter.component.html',
  styleUrls: ['./user-match-overview-presenter.component.scss']
})
export class UserMatchOverviewPresenterComponent {
  @Output() onSetTab = new EventEmitter<number>();
  @Input() matches: IMatchDetail[];
  tab: number = 1;

  setTab(tab: number): void {
    this.onSetTab.emit(tab);
    this.tab = tab;
  }

}
