import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRankingResponse } from 'src/app/shared/interfaces/ranking/ranking-response.model';
import { IRanking } from 'src/app/shared/interfaces/ranking/ranking.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private baseUrl = environment.apiUrl + 'ranking';

  isLoading$ = new BehaviorSubject(false);

  raking$ = new BehaviorSubject<IRanking[]>([]);
  constructor(private http: HttpClient) {}

  _loaderInit() {
    this.isLoading$.next(true);
  }

  _loaderStop() {
    this.isLoading$.next(false);
  }

  loadRanking() {
    if (this.raking$.value.length <= 0) {
      this._loaderInit();
    }
    this.http.get<IRankingResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.raking$.next(response.results);
      this._loaderStop();
    });
  }
}
