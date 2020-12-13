import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-admin-match-details-presenter',
  templateUrl: './admin-match-details-presenter.component.html',
  styleUrls: ['./admin-match-details-presenter.component.scss'],
})
export class AdminMatchDetailsPresenterComponent {
  
  @Input() match: IMatchDetail;
  @Input() formGroup;
  @Output() closeDialog = new EventEmitter();
  @Output() submitForm = new EventEmitter();

  authUser: UserAuth;
  constructor(private _userService: UserService){
     this._userService.userAuth$.subscribe((result)=>this.authUser=result)
  }

  clickSubmitForm(): void {
    this.submitForm.emit();
  }
  
}
