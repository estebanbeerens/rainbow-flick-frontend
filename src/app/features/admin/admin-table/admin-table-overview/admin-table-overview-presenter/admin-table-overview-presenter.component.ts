import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-admin-table-overview-presenter',
  templateUrl: './admin-table-overview-presenter.component.html',
  styleUrls: ['./admin-table-overview-presenter.component.scss'],
})
export class AdminTableOverviewPresenterComponent implements OnInit {
  //table pagination
  minTable: number = 0;
  splitEvery: number = 5;
  total: number;

  viewTable: ITableDetails[];
  @Input() tables: ITableDetails[];
  @Output() delete = new EventEmitter();
  @Output() onClick = new EventEmitter();

  authUser: UserAuth;
  constructor(private _userService: UserService){
     this._userService.userAuth$.subscribe((result)=>this.authUser=result)
  }

  //TODO PRELOADER

  ngOnChanges() {
    this.total = this.tables.length;
    this.viewTable = this.tables.slice(this.minTable, this.splitEvery);
  }

  tablePagination(min: number, max: number) {
    this.viewTable = this.tables.slice(min, max);
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

  clickDelete(tableID: String): void {
    this.delete.emit(tableID);
  }

  ngOnInit(): void {}
}
