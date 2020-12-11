import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AdminMatchDetailsShellComponent } from 'src/app/features/admin/admin-match/admin-match-details/admin-match-details-shell/admin-match-details-shell.component';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-admin-match-overview-shell',
  templateUrl: './admin-match-overview-shell.component.html',
  styleUrls: ['./admin-match-overview-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class AdminMatchOverviewShellComponent implements OnInit {
  preloader$: Observable<Boolean>;
  matches$: Observable<IMatchDetail[]>;
  viewMatches$: Observable<IMatchDetail[]>;

  constructor(
    private _matcheService: MatchService,
    private _searchFilterPipe: SearchFilterPipe,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this._matcheService.loadAdminMatches();
    this.matches$ = this._matcheService.matchesAdmin$.asObservable();
    this.viewMatches$ = this.matches$;
    this.preloader$ = this._matcheService.isLoading$.asObservable();
  }

  createTable() {
    this.openDialog('CREATE');
  }
  search(searchString: string) {
    this.viewMatches$ = this._searchFilterPipe.transform(this.matches$, searchString);
  }

  actionTable(result) {
    this._matcheService.loadMatchDetails(result.ID);
    this.openDialog(result.action);
  }

  deleteTable(ID: String) {
    this._matcheService.deleteMatch(ID);
  }

  openDialog(action: String): void {
    const dialogRef = this.dialog.open(AdminMatchDetailsShellComponent, {
      minWidth: '400px',
      data: { action: action },
    });
  }
}
