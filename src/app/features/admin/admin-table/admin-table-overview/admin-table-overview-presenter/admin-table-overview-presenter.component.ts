import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-overview-presenter',
  templateUrl: './admin-table-overview-presenter.component.html',
  styleUrls: ['./admin-table-overview-presenter.component.scss'],
})
export class AdminTableOverviewPresenterComponent implements OnInit {
  //table pagination
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewTable: ITableDetails[];
  @Input() tables: ITableDetails[];
  @Output() delete = new EventEmitter();
  @Output() actionButton = new EventEmitter();

  //TODO PRELOADER

  ngOnChanges() {
    this.total = this.tables.length;
    this.viewTable = this.tables.slice(this.minTable, this.splitEvery);
  }

  tablePagination(min: number, max: number) {
    this.viewTable = this.tables.slice(min, max);
  }

  clickPrevious(result) {
    this.tablePagination(result.from, result.to);
  }

  clickNext(result) {
    this.tablePagination(result.from, result.to);
  }

  clickView(tableID: String): void {
    console.log('click view');
    this.actionButton.emit({ tableID: tableID, action: 'VIEW' });
  }

  clickDelete(tableID: String): void {
    this.delete.emit(tableID);
  }
  // constructor() {
  //   this.viewTable = this.tables.slice(this.minTable, this.splitEvery - 1);
  //   console.log(this.viewTable);
  // }

  ngOnInit(): void {}
}
