import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ITableDetails, ITableDetailsInitialValue } from 'src/app/shared/interfaces/table/table-details.model';
import { ITableDetailsResponse } from 'src/app/shared/interfaces/table/table-details-response.model';
import { ITablesResponse } from 'src/app/shared/interfaces/table/tables-response.model';
import { ITableOverviewResponse } from 'src/app/shared/interfaces/table/tables-overview-respons.model';
import { ITableOverview } from 'src/app/shared/interfaces/table/tables-overview.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private baseUrl = environment.apiUrl + 'table';

  isLoading$ = new BehaviorSubject(false);

  tableOverview$ = new BehaviorSubject<ITableOverview>(null);

  tables$ = new BehaviorSubject<ITableDetails[]>([]);
  tableDetails$ = new BehaviorSubject<ITableDetails>(null);

  constructor(private http: HttpClient) {}

  _loaderInit() {
    this.isLoading$.next(true);
  }

  _loaderStop() {
    this.isLoading$.next(false);
  }

  loadTables() {
    if (this.tables$.value.length <= 0) {
      this._loaderInit();
    }
    this.http.get<ITablesResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.tables$.next(response.results);
      this._loaderStop();
    });
  }

  loadTableDetails(tableID: String) {
    this._loaderInit();
    if (tableID != 'create') {
      this.http.get<ITableDetailsResponse>(`${this.baseUrl}/${tableID}`).subscribe((response) => {
        this.tableDetails$.next(response.result);
        this._loaderStop();
      });
    } else {
      this.tableDetails$.next(ITableDetailsInitialValue);
      this._loaderStop();
    }
  }

  updateTable(tableID: String, body) {
    this.http.put<ITableDetailsResponse>(`${this.baseUrl}/${tableID}`, body).subscribe((response) => {
      this.tableDetails$.next(response.result);
    });
  }

  deleteTable(tableID: String) {
    this.http.delete(`${this.baseUrl}/${tableID}`).subscribe((response) => {
      this.tables$.next(this.tables$.value.filter((table) => table.id != tableID));
    });
  }

  createTable(body) {
    this.http.post<ITableDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.tables$.next([...this.tables$.value, response.result]);
    });
  }

  overviewTable(date: Date) {
    this._loaderInit();
    this.http.get<ITableOverviewResponse>(`${this.baseUrl}/overview/${date}`).subscribe((response) => {
      this.tableOverview$.next(response.result);
      this._loaderStop();
    });
  }
}
