import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ITableDetailsResponse } from 'src/app/shared/interfaces/table/table-details-response.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private baseUrl = environment.apiUrl + 'table';

  tables$ = new BehaviorSubject<ITableDetailsResponse[]>([]);
  tableDetails$ = new BehaviorSubject<ITableDetailsResponse>(null);

  constructor(private http: HttpClient) {}

  loadTables() {
    this.http.get<ITableDetailsResponse[]>(`${this.baseUrl}`).subscribe((response) => {
      this.tables$.next(response['results']);
    });
  }

  loadTableDetails(tableID: String) {
    this.http.get<ITableDetailsResponse>(`${this.baseUrl}/${tableID}`).subscribe((response) => {
      this.tableDetails$.next(response['result']);
    });
  }

  updateTable(tableID: String, body) {
    this.http.put<ITableDetailsResponse>(`${this.baseUrl}/${tableID}`, body).subscribe((response) => {
      this.tables$.next(response['results']);
    });
  }

  deleteTable(tableID: String) {
    this.http.delete<ITableDetailsResponse>(`${this.baseUrl}/${tableID}`).subscribe((response) => {
      this.tables$.next(this.tables$.value.filter((table) => table.id != response.id));
    });
  }

  createTable(body) {
    this.http.post<ITableDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.tables$.next([...this.tables$.value, response['result']]);
    });
  }
}
