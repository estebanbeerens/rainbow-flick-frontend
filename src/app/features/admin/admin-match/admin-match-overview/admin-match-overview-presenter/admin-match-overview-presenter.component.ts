import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-admin-match-overview-presenter',
  templateUrl: './admin-match-overview-presenter.component.html',
  styleUrls: ['./admin-match-overview-presenter.component.scss'],
})
export class AdminMatchOverviewPresenterComponent implements OnInit {
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewMaches: IMatchDetail[];
  @Input() matches: IMatchDetail[];
  @Output() delete = new EventEmitter();
  @Output() actionButton = new EventEmitter();

  ngOnChanges() {
    if (this.matches != null) {
      this.total = this.matches.length;
      this.viewMaches = this.matches.slice(this.minTable, this.splitEvery);
    }
  }

  tablePagination(min: number, max: number) {
    this.viewMaches = this.matches.slice(min, max);
  }

  clickPrevious(result) {
    this.tablePagination(result.from, result.to);
  }

  clickNext(result) {
    this.tablePagination(result.from, result.to);
  }

  clickView(ID: String): void {
    console.log('click view');
    this.actionButton.emit({ ID: ID, action: 'VIEW' });
  }

  clickDelete(ID: String): void {
    this.delete.emit(ID);
  }

  ngOnInit(): void {}
}
