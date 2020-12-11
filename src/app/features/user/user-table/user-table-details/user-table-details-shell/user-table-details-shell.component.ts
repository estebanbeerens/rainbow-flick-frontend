import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { ActivatedRoute } from '@angular/router';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';
import { Observable } from 'rxjs';
import { ITableOverviewDetails } from 'src/app/shared/interfaces/table/tables-overview-details.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-table-details-shell',
  templateUrl: './user-table-details-shell.component.html',
  styleUrls: ['./user-table-details-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class UserTableDetailsShellComponent implements OnInit {
  getId: String;
  table$: Observable<ITableOverviewDetails>;
  constructor(
    private _tableService: TableService,
    private _route: ActivatedRoute,
    private _searchFilterPipe: SearchFilterPipe
  ) {}
  ngOnInit(): void {
    this.getId = this._route.snapshot.paramMap.get('id');
    this._tableService.tableOverview$.subscribe((result) => console.log(result));

    // get element
    this.table$ = this._tableService.tableOverview$.pipe(
      map((items) => {
        return items.tables.find((item) => item.id == this.getId);
      })
    );
  }
}
