import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminTableDetailsShellComponent } from 'src/app/features/admin/admin-table/admin-table-details/admin-table-details-shell/admin-table-details-shell.component';
import { TableService } from 'src/app/services/table.service';
import { UserService } from 'src/app/services/user.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-admin-table-overview-shell',
  templateUrl: './admin-table-overview-shell.component.html',
  styleUrls: ['./admin-table-overview-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class AdminTableOverviewShellComponent implements OnInit {
  preloader$: Observable<Boolean>;
  viewTables$: Observable<ITableDetails[]>;
  tables$: Observable<ITableDetails[]>;
  authUser: UserAuth;
  constructor(
    private _tableService: TableService,
    private _searchFilterPipe: SearchFilterPipe,
    private router: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this._userService.userAuth$.subscribe((result)=>this.authUser=result);
    this._tableService.loadTables();
    this.tables$ = this._tableService.tables$.asObservable();
    this.viewTables$ = this.tables$;
    this.preloader$ = this._tableService.isLoading$.asObservable();
  }

  search(searchString: string) {
    this.viewTables$ = this._searchFilterPipe.transform(this.tables$, searchString);
  }

  createTable() {
    this.router.navigate(['/app/admin/table/details/create']);
  }

  viewTable(id: String) {
    this.router.navigate(['/app/admin/table/details/' + id.toString()]);
  }

  deleteTable(tableID: String) {
    this._tableService.deleteTable(tableID);
  }
}
