import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
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

  clickSubmitForm(): void {
    this.submitForm.emit();
  }
  
}
