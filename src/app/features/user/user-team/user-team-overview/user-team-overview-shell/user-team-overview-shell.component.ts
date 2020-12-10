import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-user-team-overview-shell',
  templateUrl: './user-team-overview-shell.component.html',
  styleUrls: ['./user-team-overview-shell.component.scss']
})
export class UserTeamOverviewShellComponent implements OnInit {
  teams$: Observable<ITeamDetails[]>

  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.initializeTeams();
  }

  initializeTeams(){
    this.teamService.loadTeams();
    this.teams$ =this.teamService.teams$.asObservable();
  }

}
