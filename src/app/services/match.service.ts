import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMatchDetailsResponse } from 'src/app/shared/interfaces/match/match-details-response.model';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { IMatchsResponse } from 'src/app/shared/interfaces/match/matchs-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private baseUrl = environment.apiUrl + 'match';
  isLoading$ = new BehaviorSubject(false);

  matches$ = new BehaviorSubject<IMatchDetail[]>([]);
  matchDetails$ = new BehaviorSubject<IMatchDetail>(null);

  constructor(private http: HttpClient) {}

  _loaderInit() {
    this.isLoading$.next(true);
  }

  _loaderStop() {
    this.isLoading$.next(false);
  }

  loadMatches() {
    this._loaderInit();
    this.http.get<IMatchsResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.matches$.next(response.results);
      this._loaderStop();
    });
  }

  loadMatchDetails(matchID: String) {
    this.http.get<IMatchDetailsResponse>(`${this.baseUrl}/${matchID}`).subscribe((response) => {
      this.matchDetails$.next(response.result);
    });
  }

  updateMatch(matchID: String, body) {
    this.http.put<IMatchDetailsResponse>(`${this.baseUrl}/${matchID}`, body).subscribe((response) => {
      this.matchDetails$.next(response.result);
    });
  }

  deleteMatch(matchID: String) {
    this.http.delete<IMatchDetailsResponse>(`${this.baseUrl}/${matchID}`).subscribe((response) => {
      this.matches$.next(this.matches$.value.filter((match) => match.id != response.result.id));
    });
  }

  createMatch(body) {
    this.http.post<IMatchDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.matches$.next([...this.matches$.value, response.result]);
    });
  }

  //TODO update score Match 5fd20c1bfa0d0e000400c1ec
  updateScoreMatch(matchID: String, body) {
    this.http.put<IMatchDetailsResponse>(`${this.baseUrl}/score/${matchID}`, body).subscribe((response) => {
      this.matchDetails$.next(response.result);
    });
  }

  //TODO FIXED PROBLEM: post challenge
  challengeMatch(body) {
    this.http.post<IMatchDetailsResponse>(`${this.baseUrl}/challenge`, body).subscribe((response) => {
      this.matchDetails$.next(response.result);
    });
  }

  //TODO join match
  //TODO leave match
  //TODO start match
  //TODO end match
  //TODO validate match
}
