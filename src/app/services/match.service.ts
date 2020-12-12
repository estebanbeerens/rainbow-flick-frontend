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

  matchesAdmin$ = new BehaviorSubject<IMatchDetail[]>([]);
  matchesAuthUser$ = new BehaviorSubject<IMatchDetail[]>([]);
  matchDetails$ = new BehaviorSubject<IMatchDetail>(null);

  constructor(private http: HttpClient) {}

  loadAdminMatches() {
    this.http.get<IMatchsResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.matchesAdmin$.next(response.results);
      this._loaderStop();
    });
  }

  _loaderInit() {
    this.isLoading$.next(true);
  }

  _loaderStop() {
    this.isLoading$.next(false);
  }

  loadMatchesAuthUser() {
    this.http.get<IMatchsResponse>(`${this.baseUrl}/authUser`).subscribe((response) => {
      this.matchesAuthUser$.next(response.results);
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
      this.matchesAdmin$.next(this.matchesAdmin$.value.filter((match) => match.id != response.result.id));
    });
  }

  createMatch(body) {
    this.http.post<IMatchDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.matchesAdmin$.next([...this.matchesAdmin$.value, response.result]);
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
      console.log('Challgense match', response);
      // this.matchesAdmin$.next([...this.matchesAdmin$.value, response.result]); //overkill
      this.matchesAuthUser$.next([...this.matchesAuthUser$.value, response.result]);
    });
  }

  //TODO test endpoint
  joinMatch(matchID: String) {
    this.http.get<IMatchDetailsResponse>(`${this.baseUrl}/join/${matchID}`).subscribe((response) => {
      this.matchesAuthUser$.next(
        this.matchesAuthUser$.value.map((match) => {
          if (match.id == response.result.id) {
            match = response.result;
          }
          return match;
        })
      );
    });
  }
  //TODO test endpoint
  leaveMatch(matchID: String) {
    this.http.get<IMatchDetailsResponse>(`${this.baseUrl}/join/${matchID}`).subscribe((response) => {
      this.matchesAuthUser$.next(
        this.matchesAuthUser$.value.map((match) => {
          if (match.id == response.result.id) {
            match = response.result;
          }
          return match;
        })
      );
    });
  }
  //TODO test endpoint
  startMatch(matchID: String) {
    this.http.get<IMatchDetailsResponse>(`${this.baseUrl}/start/${matchID}`).subscribe((response) => {
      this.matchesAuthUser$.next(
        this.matchesAuthUser$.value.map((match) => {
          if (match.id == response.result.id) {
            match = response.result;
          }
          return match;
        })
      );
    });
  }

  //TODO validate request
  endMatch(matchID: String) {
    this.http.get<IMatchDetailsResponse>(`${this.baseUrl}/end/${matchID}`).subscribe((response) => {
      this.matchesAuthUser$.next(
        this.matchesAuthUser$.value.map((match) => {
          if (match.id == response.result.id) {
            match = response.result;
          }
          return match;
        })
      );
    });
  }
  //TODO validate match
  validateMatch(matchID: String) {
    this.http.get<IMatchDetailsResponse>(`${this.baseUrl}/validate/${matchID}`).subscribe((response) => {
      this.matchesAuthUser$.next(
        this.matchesAuthUser$.value.map((match) => {
          if (match.id == response.result.id) {
            match = response.result;
          }
          return match;
        })
      );
    });
  }
}
