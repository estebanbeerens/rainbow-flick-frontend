import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-user-table-overview-shell',
  templateUrl: './user-table-overview-shell.component.html',
  styleUrls: ['./user-table-overview-shell.component.scss'],
})
export class UserTableOverviewShellComponent implements OnInit {
  tables$: ITableDetails[];

  constructor(private _tableService: TableService) {}
  ngOnInit(): void {
    this._tableService.loadTables();
    this._tableService.tables$.subscribe((table) => (this.tables$ = table));
  }
}
