import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-overview-presenter',
  templateUrl: './admin-table-overview-presenter.component.html',
  styleUrls: ['./admin-table-overview-presenter.component.scss'],
})
export class AdminTableOverviewPresenterComponent implements OnInit {
  @Input() tables: ITableDetails[];
  @Output() delete = new EventEmitter();
  @Output() actionButton = new EventEmitter();

  //TODO PRELOADER

  clickView(tableID: String): void {
    console.log('click view');
    this.actionButton.emit({ tableID: tableID, action: 'VIEW' });
  }

  clickDelete(tableID: String): void {
    this.delete.emit(tableID);
  }
  constructor() {}

  ngOnInit(): void {}
}
