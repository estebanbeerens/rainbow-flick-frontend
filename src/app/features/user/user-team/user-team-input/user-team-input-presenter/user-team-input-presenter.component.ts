import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-user-team-input-presenter',
  templateUrl: './user-team-input-presenter.component.html',
  styleUrls: ['./user-team-input-presenter.component.scss']
})
export class UserTeamInputPresenterComponent {

  @Input() authUser: IUserAuth;
  @Input() team: ITeamDetails;
  @Input() generalForm: FormGroup;
  
  @Output() submitForm = new EventEmitter();
  @Output() fileChanged = new EventEmitter<File>();

  onSubmit(): void {
    this.submitForm.emit();
  }

  onFileChanged(file: File): void {
    this.fileChanged.emit(file);
  }

}
