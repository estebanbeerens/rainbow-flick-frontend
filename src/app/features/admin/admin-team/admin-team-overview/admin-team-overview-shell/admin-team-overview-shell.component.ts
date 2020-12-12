import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminTeamDetailsShellComponent } from 'src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { ITeamOverview } from 'src/app/shared/interfaces/team/team-overview.model';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-admin-team-overview-shell',
  templateUrl: './admin-team-overview-shell.component.html',
  styleUrls: ['./admin-team-overview-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class AdminTeamOverviewShellComponent implements OnInit {

  preloader$: Observable<Boolean>;
  teams$: Observable<ITeamOverview[]>;
  viewTeams$: Observable<ITeamOverview[]>;

  constructor(
    private _teamService: TeamService,
    private _searchFilterPipe: SearchFilterPipe,
    private router: Router
  ) {}

  async ngOnInit() {
    this._teamService.loadTeams();
    this.teams$ = this._teamService.teams$.asObservable();
    this.viewTeams$ = this.teams$;
    //stop preloader
    // this.preloader = false;
    this.preloader$ = this._teamService.isLoading$.asObservable();
  }

  createTeam() {
    this.router.navigate(['/app/admin/team/details/0']);
  }

  viewTeam(id: String) {
    this._teamService.loadTeamDetails(id);
    this.router.navigate(['/app/admin/team/details/' + id.toString()]);
  }

  deleteTeam(id: String) {
    this._teamService.deleteTeam(id);
  }

  search(searchString: string) {
    this.viewTeams$ = this._searchFilterPipe.transform(this.teams$, searchString);
  }
  
}
