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

  viewMatches: IMatchDetail[];
  @Input() matches: IMatchDetail[];
  @Output() delete = new EventEmitter();
  @Output() onClick = new EventEmitter<string>();

  ngOnChanges() {
    if (this.matches != null) {
      this.total = this.matches.length;
      this.viewMatches = this.matches.slice(this.minTable, this.splitEvery);
    }
  }

  tablePagination(min: number, max: number) {
    this.viewMatches = this.matches.slice(min, max);
  }

  clickPrevious(result) {
    this.tablePagination(result.from, result.to);
  }

  clickNext(result) {
    this.tablePagination(result.from, result.to);
  }

  clickView(id: String): void {
    this.onClick.emit(id.toString());
  }

  clickDelete(ID: String): void {
    this.delete.emit(ID);
  }

  ngOnInit(): void {}
}
