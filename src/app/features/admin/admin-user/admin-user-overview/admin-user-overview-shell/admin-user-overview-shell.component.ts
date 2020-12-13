import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminUserDetailsShellComponent } from 'src/app/features/admin/admin-user/admin-user-details/admin-user-details-shell/admin-user-details-shell.component';
import { UserService } from 'src/app/services/user.service';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';
import { SearchFilterPipe } from 'src/app/shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-admin-user-overview-shell',
  templateUrl: './admin-user-overview-shell.component.html',
  styleUrls: ['./admin-user-overview-shell.component.scss'],
  providers: [SearchFilterPipe],
})
export class AdminUserOverviewShellComponent implements OnInit {
  preloader$: Observable<Boolean>;
  users$: Observable<IUserDetails[]>;
  viewUsers$: Observable<IUserDetails[]>;

  constructor(
    private _userService: UserService,
    private _searchFilterPipe: SearchFilterPipe,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this._userService.loadUsers();
    this.users$ = this._userService.users$.asObservable();
    this.viewUsers$ = this.users$;
    this.preloader$ = this._userService.isLoading$.asObservable();
  }

  createUser() {
    this.router.navigate(['/app/admin/user/details/create']);
  }

  viewUser(id: String) {
    this.router.navigate(['/app/admin/user/details/' + id.toString()]);
  }

  deleteUser(id: String) {
    this._userService.deleteUser(id);
  }

  search(searchString: string) {
    this.viewUsers$ = this._searchFilterPipe.transformUser(this.users$, searchString);
  }

}
