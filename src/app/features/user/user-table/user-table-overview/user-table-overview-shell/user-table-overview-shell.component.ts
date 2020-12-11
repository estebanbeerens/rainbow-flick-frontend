import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from 'src/app/services/table.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';
import { ITableOverview } from 'src/app/shared/interfaces/table/tables-overview.model';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-user-table-overview-shell',
  templateUrl: './user-table-overview-shell.component.html',
  styleUrls: ['./user-table-overview-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class UserTableOverviewShellComponent implements OnInit {
  preloader$: Observable<Boolean>;
  viewTablesOverview$: Observable<ITableOverview>;
  tablesOverview$: Observable<ITableOverview>;

  constructor(private _tableService: TableService, private _searchFilterPipe: SearchFilterPipe) {}
  ngOnInit(): void {
    this._tableService.overviewTable(new Date());

    this.tablesOverview$ = this._tableService.tableOverview$.asObservable();

    this.viewTablesOverview$ = this.tablesOverview$;
    this.preloader$ = this._tableService.isLoading$.asObservable();
  }

  search(searchString: string) {
    this.viewTablesOverview$ = this._searchFilterPipe.transformTableOverview(this.tablesOverview$, searchString);
  }
}
