import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { table } from 'console';
import { UserTableDetailsShellComponent } from 'src/app/features/user/user-table/user-table-details/user-table-details-shell/user-table-details-shell.component';
import { TableService } from 'src/app/services/table.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-overview-shell',
  templateUrl: './admin-table-overview-shell.component.html',
  styleUrls: ['./admin-table-overview-shell.component.scss'],
})
export class AdminTableOverviewShellComponent implements OnInit {
  tables$: ITableDetails[];

  constructor(private _tableService: TableService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this._tableService.loadTables();
    this._tableService.tables$.subscribe((table) => (this.tables$ = table));
  }

  createTable(tableID: String) {
    //TODO fix create table
    // this._tableService.createTag()
  }

  deleteTable(tableID: String) {
    this._tableService.deleteTable(tableID);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserTableDetailsShellComponent, {
      width: '250px',
    });

    dialogRef.componentInstance.ngOnInit();
  }
}
