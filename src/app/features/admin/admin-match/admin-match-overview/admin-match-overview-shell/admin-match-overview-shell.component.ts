import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    private _matchService: MatchService,
    private _searchFilterPipe: SearchFilterPipe,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this._matchService.loadAdminMatches();
    this.matches$ = this._matchService.matchesAdmin$.asObservable();
    this.viewMatches$ = this.matches$;
    this.preloader$ = this._matchService.isLoading$.asObservable();
  }
  
  search(searchString: string) {
    this.viewMatches$ = this._searchFilterPipe.transform(this.matches$, searchString);
  }

  viewMatch(id: String) {
    this.router.navigate(['/app/admin/match/details/' + id.toString()])
  }

  deleteTable(ID: String) {
    this._matchService.deleteMatch(ID);
  }

}
