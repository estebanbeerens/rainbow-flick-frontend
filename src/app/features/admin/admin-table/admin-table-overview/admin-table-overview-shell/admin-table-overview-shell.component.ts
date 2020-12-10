import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AdminTableDetailsShellComponent } from 'src/app/features/admin/admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component';
import { TableService } from 'src/app/services/table.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';

@Component({
  selector: 'app-admin-table-overview-shell',
  templateUrl: './admin-table-overview-shell.component.html',
  styleUrls: ['./admin-table-overview-shell.component.scss'],
})
export class AdminTableOverviewShellComponent implements OnInit {
  tables$: Observable<ITableDetails[]>;

  constructor(private _tableService: TableService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this._tableService.loadTables();
    this.tables$ = this._tableService.tables$.asObservable();
  }

  actionTable(result) {
    this._tableService.loadTableDetails(result.tableID);
    this.openDialog(result.action);
  }

  deleteTable(tableID: String) {
    //TODO DELETE TABLE
    console.log(tableID);
    this._tableService.deleteTable(tableID);
  }

  openDialog(action: String): void {
    const dialogRef = this.dialog.open(AdminTableDetailsShellComponent, {
      minWidth: '400px',
      data: {action: action },
    });
  }
}
