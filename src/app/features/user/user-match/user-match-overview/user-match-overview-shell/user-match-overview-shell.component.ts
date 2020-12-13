import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
import { IUsersResponse } from 'src/app/shared/interfaces/user/users-response.model';

@Component({
  selector: 'app-user-match-overview-shell',
  templateUrl: './user-match-overview-shell.component.html',
  styleUrls: ['./user-match-overview-shell.component.scss'],
})
export class UserMatchOverviewShellComponent implements OnInit {
  matches$: BehaviorSubject<IMatchDetail[]>;
  filteredMatches$ = new BehaviorSubject<IMatchDetail[]>([]);
  currentTab: number = 1;
  searchString$ = new BehaviorSubject<String>('');
  authUser: UserAuth;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private _matchService: MatchService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeMatches();
    this._userService.userAuth$.subscribe((user) => (this.authUser = user));
    this.searchString$.subscribe(() => this.filterMatches());
  }

  navigateToTables(): void {
    this.router.navigate(['/app/user/table/overview']);
    this.snackBar.open('Kies hier een datum & tafel om uw match aan te maken.', '', {
      duration: 5000,
    });
  }
  initializeMatches() {
    this._matchService.loadMatchesAuthUser();
    this.matches$ = this._matchService.matchesAuthUser$;
    this.matches$.subscribe(() => this.filterMatches());
  }

  tabChanged(tabID: number) {
    this.currentTab = tabID;
    this.filterMatches();
  }

  searchStringChanged(searchString: string) {
    this.searchString$.next(searchString);
  }

  filterMatches() {
    let filteredMatches = this.matches$.value

      .filter(
        (match) =>
          match.name.includes(this.searchString$.value.toString()) ||
          match.homeTeam.name.includes(this.searchString$.value.toString()) ||
          match.awayTeam.name.includes(this.searchString$.value.toString())
      )
      .filter((match) => {
        switch (this.currentTab) {
          case 1: {
            return match.dateTimeEnd ? true : false;
          }
          case 2: {
            if (match.players.filter((player) => player.user.id == this.authUser.id).length > 0) {
              if (!match.dateTimeEnd) {
                return true;
              }
            }
            return false;
          }
          case 3: {
            if (match.players.filter((player) => player.user.id == this.authUser.id).length == 0) {
              if (!match.dateTimeEnd) {
                return true;
              }
              return false;
            }
          }
        } //end of filter function
        this.filteredMatches$.next(filteredMatches);
      });
  }
}
