import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITeamDetailsResponse } from 'src/app/shared/interfaces/team/team-details-response.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { ITeamsResponse } from 'src/app/shared/interfaces/team/teams-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = environment.apiUrl + 'team';

  test: ITeamsResponse;

  teams$ = new BehaviorSubject<ITeamDetails[]>([]);
  teamDetails$ = new BehaviorSubject<ITeamDetails>(null);

  constructor(private http: HttpClient) {}

  loadTeams() {
    this.http.get<ITeamsResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.teams$.next(response.results);
    });
  }

  loadTeamDetails(teamID: String) {
    this.http.get<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}`).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }

  createTeam(body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      console.log('Response', response);
      this.teamDetails$.next(response.result);
      this.teams$.next([...this.teams$.value, response.result]);
    });
  }

  //TODO add in teams
  updateTeam(teamID: String, body) {
    this.http.put<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }

  deleteTeam(teamID: String) {
    this.http.delete<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}`).subscribe((response) => {
      this.teams$.next(this.teams$.value.filter((teams) => teams.id != response.result.id));
    });
  }

  loadTeamByName(teamName: String) {
    this.http.get<ITeamDetailsResponse>(`${this.baseUrl}/search?name=${teamName}`).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }

  joinTeam(teamID: String, body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}/join`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }

  leaveTeam(teamID: String, body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}/leave`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }
  acceptTeam(teamID: String, body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}/accept`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }
}