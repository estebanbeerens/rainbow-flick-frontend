import { Component, Input, OnInit } from '@angular/core';
import { ITableOverviewDetails } from 'src/app/shared/interfaces/table/tables-overview-details.model';

@Component({
  selector: 'app-user-table-details-presenter',
  templateUrl: './user-table-details-presenter.component.html',
  styleUrls: ['./user-table-details-presenter.component.scss'],
})
export class UserTableDetailsPresenterComponent implements OnInit {
  @Input() table: ITableOverviewDetails;
  constructor() {}

  ngOnInit(): void {}
}
