import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITeamsDetailsResponse } from 'src/app/shared/interfaces/team/teams-details-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = environment.apiUrl + 'team';

  teams$ = new BehaviorSubject<ITeamsDetailsResponse[]>([]);
  teamDetails$ = new BehaviorSubject<ITeamsDetailsResponse>(null);

  constructor(private http: HttpClient) {}

  loadTeams() {
    this.http.get<ITeamsDetailsResponse[]>(`${this.baseUrl}`).subscribe((response) => {
      this.teams$.next(response['results']);
    });
  }

  loadTeamDetails(teamsID: String) {
    this.http.get<ITeamsDetailsResponse>(`${this.baseUrl}/${teamsID}`).subscribe((response) => {
      this.teamDetails$.next(response['result']);
    });
  }

  updateTeam(teamsID: String, body) {
    this.http.put<ITeamsDetailsResponse>(`${this.baseUrl}/${teamsID}`, body).subscribe((response) => {
      this.teams$.next(response['results']);
    });
  }

  deleteTeam(teamsID: String) {
    this.http.delete<ITeamsDetailsResponse>(`${this.baseUrl}/${teamsID}`).subscribe((response) => {
      this.teams$.next(this.teams$.value.filter((teams) => teams.id != response.id));
    });
  }

  createTeam(body) {
    this.http.post<ITeamsDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      this.teams$.next([...this.teams$.value, response['result']]);
    });
  }

  //TODO fix joinTeam
  // joinTeam(teamsID: String, body){
  //   this.http.post<>(`${this.baseUrl}/team/${teamsID}/join`, body).subscribe((response) => {
  //     this.teams$.next([...this.teams$.value, response['result']]);
  //   });
  // }

  //TODO fix accept team
  // acceptTeam(teamsID: String, body){
  //     this.http.post<>(`${this.baseUrl}/team/${teamsID}/accept`, body).subscribe((response) => {
  //       this.teams$.next([...this.teams$.value, response['result']]);
  //     });
  //   }
}
