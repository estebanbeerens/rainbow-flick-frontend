import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  loadTeamDetails(teamsID: String) {
    this.http.get<ITeamDetailsResponse>(`${this.baseUrl}/${teamsID}`).subscribe((response) => {
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

  updateTeam(teamsID: String, body) {
    this.http.put<ITeamDetailsResponse>(`${this.baseUrl}/${teamsID}`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }

  deleteTeam(teamsID: String) {
    this.http.delete<ITeamDetailsResponse>(`${this.baseUrl}/${teamsID}`).subscribe((response) => {
      this.teams$.next(this.teams$.value.filter((teams) => teams.id != response.result.id));
    });
  }

  //TODO get team by name

  //TODO fix joinTeam
  // joinTeam(teamsID: String, body){
  //   this.http.post<>(`${this.baseUrl}/team/${teamsID}/join`, body).subscribe((response) => {
  //     this.teams$.next([...this.teams$.value, response]);
  //   });
  // }

  //TODO fix accept team
  // acceptTeam(teamsID: String, body){
  //     this.http.post<>(`${this.baseUrl}/team/${teamsID}/accept`, body).subscribe((response) => {
  //       this.teams$.next([...this.teams$.value, response['result']]);
  //     });
  //   }

  //TODO leave team
}
