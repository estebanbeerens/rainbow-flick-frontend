import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AdminTeamDetailsShellComponent } from 'src/app/features/admin/admin-team/admin-team-details/admin-team-details-shell/admin-team-details-shell.component';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-admin-team-overview-shell',
  templateUrl: './admin-team-overview-shell.component.html',
  styleUrls: ['./admin-team-overview-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class AdminTeamOverviewShellComponent implements OnInit {
  teams$: Observable<ITeamDetails[]>;
  viewTeams$: Observable<ITeamDetails[]>;

  constructor(
    private _teamService: TeamService,
    private _searchFilterPipe: SearchFilterPipe,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._teamService.loadTeams();
    this.teams$ = this._teamService.teams$.asObservable();
    this.viewTeams$ = this.teams$;
  }

  createTable() {
    this.openDialog('CREATE');
  }
  search(searchString: string) {
    this.viewTeams$ = this._searchFilterPipe.transform(this.teams$, searchString);
  }

  actionTable(result) {
    this._teamService.loadTeamDetails(result.ID);
    this.openDialog(result.action);
  }

  deleteTable(ID: String) {
    this._teamService.deleteTeam(ID);
  }
  openDialog(action: String): void {
    const dialogRef = this.dialog.open(AdminTeamDetailsShellComponent, {
      minWidth: '400px',
      data: { action: action },
    });
  }
}
