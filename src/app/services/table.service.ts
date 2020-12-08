import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ITableDetailResponse } from 'src/app/shared/interfaces/table/table-detail-response.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrl = environment.apiUrl + 'Table';

  tables$ = new BehaviorSubject<ITableDetailResponse[]>([]);
  tableDetails$ = new BehaviorSubject<ITableDetailResponse>(null);

  constructor(private http: HttpClient) { }

  loadTables(){
    this.http.get<ITableDetailResponse[]>(`${this.baseUrl}`).subscribe((response) => {
      this.tables$.next(response['results']);
    })
  }

  loadTableDetails(tableID: String){
    this.http.get<ITableDetailResponse>(`${this.baseUrl}/${tableID}`).subscribe((response) => {
      this.tableDetails$.next(response['result']);
    })
  }

  deleteTag(tableID: String){
    this.http.delete<ITableDetailResponse>(`${this.baseUrl}/${tableID}`).subscribe((response) => {
      this.tables$.next(this.tables$.value.filter((table) => table.id != response.id));
    })
  }

  createTag(body){
    this.http.post<ITableDetailResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.tables$.next([...this.tables$.value, response['result']]);
    })
  }

  

}
