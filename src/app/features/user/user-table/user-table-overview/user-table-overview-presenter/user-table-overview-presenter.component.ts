import { Component, Input, OnInit } from '@angular/core';
import { ITableOverview } from 'src/app/shared/interfaces/table/tables-overview.model';

@Component({
  selector: 'app-user-table-overview-presenter',
  templateUrl: './user-table-overview-presenter.component.html',
  styleUrls: ['./user-table-overview-presenter.component.scss'],
})
export class UserTableOverviewPresenterComponent implements OnInit {
  //table pagination
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  @Input() tables: ITableOverview;
  constructor() {}

  tablePagination(min: number, max: number) {
    this.tables.tables = this.tables.tables.slice(min, max);
  }

  clickPrevious(result) {
    this.tablePagination(result.from, result.to);
  }

  clickNext(result) {
    this.tablePagination(result.from, result.to);
  }

  ngOnInit(): void {}
}
