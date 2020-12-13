import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ITableDetails } from 'src/app/shared/interfaces/table/table-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-admin-table-details-presenter',
  templateUrl: './admin-table-details-presenter.component.html',
  styleUrls: ['./admin-table-details-presenter.component.scss'],
})
export class AdminTableDetailsPresenterComponent {

  @Input() table: ITableDetails;
  @Input() generalForm;

  @Output() fileChanged = new EventEmitter<File>();
  @Output() submitForm = new EventEmitter();

  authUser: UserAuth;
  constructor(private _userService: UserService){
     this._userService.userAuth$.subscribe((result)=>this.authUser=result)
  }

  onSubmit(): void {
    this.submitForm.emit();
  }

  onFileChanged(file: File): void {
    this.fileChanged.emit(file);
  }

}
