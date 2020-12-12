import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITeamDetailsResponse } from 'src/app/shared/interfaces/team/team-details-response.model';
import { ITeamDetails, ITeamDetailsInitialValue } from 'src/app/shared/interfaces/team/team-details.model';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { ITeamsResponse } from 'src/app/shared/interfaces/team/teams-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = environment.apiUrl + 'team';

  test: ITeamsResponse;

  isLoading$ = new BehaviorSubject(false);

  teams$ = new BehaviorSubject<ITeamOverview[]>([]);
  teamDetails$ = new BehaviorSubject<ITeamDetails>(null);

  constructor(private http: HttpClient) {}

  _loaderInit() {
    this.isLoading$.next(true);
  }

  _loaderStop() {
    this.isLoading$.next(false);
  }

  loadTeams() {
    this._loaderInit();
    this.http.get<ITeamsResponse>(`${this.baseUrl}/all`).subscribe((response) => {
      this.teams$.next(response.results);
      this._loaderStop();
    });
  }

  loadTeamDetails(teamID: String) {
    if (teamID != 'create') {
      this.http.get<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}`).subscribe((response) => {
        this.teamDetails$.next(response.result);
      });
    } else {
      this.teamDetails$.next(ITeamDetailsInitialValue);
    }
  }

  createTeam(body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}`, body).subscribe((response) => {
      console.log('Response', response);
      this.teamDetails$.next(response.result);
      this.teams$.next([...this.teams$.value, this.convertITeamDetailsToITeamOverview(response.result)]);
    });
  }

  updateTeam(teamID: String, body) {
    this.http.put<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
      this.teams$.next(this.teams$.value.map((team) => {
        if(team.id == response.result.id){
          team = this.convertITeamDetailsToITeamOverview(response.result)
        }
        return team
      }))
    });
  }

  deleteTeam(teamID: String) {
    this.http.delete<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}`).subscribe((response) => {
      this.teams$.next(this.teams$.value.filter((teams) => teams.id != teamID));
    });
  }

  loadTeamByName(teamName: String) {
    this.http.get<ITeamDetailsResponse>(`${this.baseUrl}/search?name=${teamName}`).subscribe((response) => {
      this.teamDetails$.next(response.result);
    });
  }

  joinTeam(teamID: String, body: {id: string}) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}/join`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
      const overviewUpdateTeam = this.convertITeamDetailsToITeamOverview(response.result);
      this.teams$.next(this.teams$.value.map((team) => {
        if(team.id == overviewUpdateTeam.id){
          team = overviewUpdateTeam;
        }
        return team;
      }));
    });
  }


  leaveTeam(teamID: String, body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}/leave`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
      this.teams$.next([...this.teams$.value, this.convertITeamDetailsToITeamOverview(response.result)]);
    });
  }
  acceptTeam(teamID: String, body) {
    this.http.post<ITeamDetailsResponse>(`${this.baseUrl}/${teamID}/accept`, body).subscribe((response) => {
      this.teamDetails$.next(response.result);
      const overviewUpdateTeam = this.convertITeamDetailsToITeamOverview(response.result);
      this.teams$.next(this.teams$.value.map((team) => {
        if(team.id == overviewUpdateTeam.id){
          team = overviewUpdateTeam;
        }
        return team;
      }));
    });
  }

  private convertITeamDetailsToITeamOverview(team: ITeamDetails) :ITeamOverview{
    const teamOverview: ITeamOverview = {
      id: team.id,
      name: team.name,
      location: team.location,
      companyName: team.companyName,
      imageURL: team.imageURL,
      participantIDs: team.participants.map((participant) => participant.id),
      requestedParticipantIDs: team.requestedParticipants.map((participant) => participant.id),
      captainID: team.captain.id
    }
    return teamOverview
  }
}
