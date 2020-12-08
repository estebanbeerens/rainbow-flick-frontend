import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from 'src/app/services/table.service';
import { BehaviorSubject } from 'rxjs';
import { ITableDetailsResponse } from 'src/app/shared/interfaces/table/table-details-response.model';
import { UserTableDetailsShellComponent } from 'src/app/features/user/user-table/user-table-details/user-table-details-shell/user-table-details-shell.component';

@Component({
  selector: 'app-user-table-overview-shell',
  templateUrl: './user-table-overview-shell.component.html',
  styleUrls: ['./user-table-overview-shell.component.scss'],
})
export class UserTableOverviewShellComponent implements OnInit {
  tables$: ITableDetailsResponse[];

  constructor(private _tableService: TableService) {}
  ngOnInit(): void {
    this._tableService.loadTables();
    this._tableService.tables$.subscribe((table) => (this.tables$ = table));
  }
}
