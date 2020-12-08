import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMatchDetailResponse } from 'src/app/shared/interfaces/match/match-details-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private baseUrl = environment.apiUrl + 'table';

  matches$ = new BehaviorSubject<IMatchDetailResponse[]>([]);
  matchDetails$ = new BehaviorSubject<IMatchDetailResponse>(null);

  constructor(private http: HttpClient) {}

  loadMatches() {
    this.http.get<IMatchDetailResponse[]>(`${this.baseUrl}`).subscribe((response) => {
      this.matches$.next(response['results']);
    });
  }

  loadMatchDetails(matchID: String) {
    this.http.get<IMatchDetailResponse>(`${this.baseUrl}/${matchID}`).subscribe((response) => {
      this.matchDetails$.next(response['result']);
    });
  }

  updateMatch(matchID: String, body) {
    this.http.put<IMatchDetailResponse>(`${this.baseUrl}/${matchID}`, body).subscribe((response) => {
      this.matches$.next(response['results']);
    });
  }

  deleteMatch(matchID: String) {
    this.http.delete<IMatchDetailResponse>(`${this.baseUrl}/${matchID}`).subscribe((response) => {
      this.matches$.next(this.matches$.value.filter((match) => match.id != response.id));
    });
  }

  createMatch(body) {
    this.http.post<IMatchDetailResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.matches$.next([...this.matches$.value, response['result']]);
    });
  }

  //TODO update score Match
  //TODO post challenge
  //TODO join match
}
