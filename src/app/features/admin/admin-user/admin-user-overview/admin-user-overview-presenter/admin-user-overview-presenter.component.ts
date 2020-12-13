import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-user-overview-presenter',
  templateUrl: './admin-user-overview-presenter.component.html',
  styleUrls: ['./admin-user-overview-presenter.component.scss'],
})
export class AdminUserOverviewPresenterComponent implements OnInit {
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewUsers: IUserDetails[];
  @Input() users: IUserDetails[];
  @Output() delete = new EventEmitter();
  @Output() onClick = new EventEmitter();

  authUser: UserAuth;
  constructor(private _userService: UserService){
     this._userService.userAuth$.subscribe((result)=>this.authUser=result)
  }

  ngOnChanges() {
    if (this.users != null) {
      this.total = this.users.length;
      this.viewUsers = this.users.slice(this.minTable, this.splitEvery);
    }
  }

  tablePagination(min: number, max: number) {
    this.viewUsers = this.users.slice(min, max);
  }

  clickPrevious(result) {
    this.tablePagination(result.from, result.to);
  }

  clickNext(result) {
    this.tablePagination(result.from, result.to);
  }

  clickView(id: String): void {
    this.onClick.emit(id);
  }

  clickDelete(id: String): void {
    this.delete.emit(id);
  }

  ngOnInit(): void {}
}
