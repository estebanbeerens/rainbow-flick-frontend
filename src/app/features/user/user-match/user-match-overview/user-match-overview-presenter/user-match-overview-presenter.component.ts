import { Component } from '@angular/core';

@Component({
  selector: 'app-user-match-overview-presenter',
  templateUrl: './user-match-overview-presenter.component.html',
  styleUrls: ['./user-match-overview-presenter.component.scss']
})
export class UserMatchOverviewPresenterComponent {

  tab: number = 1;

  setTab(tab: number): void {
    this.tab = tab;
  }

}
