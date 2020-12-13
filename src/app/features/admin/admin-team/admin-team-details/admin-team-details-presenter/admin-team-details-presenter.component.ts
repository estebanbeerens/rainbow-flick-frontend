import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-team-details-presenter',
  templateUrl: './admin-team-details-presenter.component.html',
  styleUrls: ['./admin-team-details-presenter.component.scss'],
})
export class AdminTeamDetailsPresenterComponent {

  @Input() users: IUserDetails[];
  @Input() team: ITeamDetails;
  @Input() generalForm: FormGroup;
  
  @Output() submitForm = new EventEmitter();
  @Output() fileChanged = new EventEmitter<File>();

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
