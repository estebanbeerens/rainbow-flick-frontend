import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-admin-team-details-presenter',
  templateUrl: './admin-team-details-presenter.component.html',
  styleUrls: ['./admin-team-details-presenter.component.scss'],
})
export class AdminTeamDetailsPresenterComponent {

  @Input() team: ITeamDetails;
  @Input() formGroup;
  
  @Output() submitForm = new EventEmitter();

  clickSubmitForm(): void {
    this.submitForm.emit();
  }
  
}
