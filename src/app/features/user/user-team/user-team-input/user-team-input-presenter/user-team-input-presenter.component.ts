import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-user-team-input-presenter',
  templateUrl: './user-team-input-presenter.component.html',
  styleUrls: ['./user-team-input-presenter.component.scss']
})
export class UserTeamInputPresenterComponent {

  @Input() generalForm: FormGroup;
  @Input() team: ITeamDetails

}
