import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { IChanllenge } from 'src/app/shared/interfaces/match/challenge.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-user-match-create-presenter',
  templateUrl: './user-match-create-presenter.component.html',
  styleUrls: ['./user-match-create-presenter.component.scss'],
})
export class UserMatchCreatePresenterComponent {
  date: Date;
  @Input() teams: ITeamDetails[];
  @Input() challenge: IChanllenge;
  @Input() generalForm: FormGroup;

  @Output() onSubmitPress = new EventEmitter();
  constructor() {}

  onSubmit() {
    this.changeTimeDate();
    this.onSubmitPress.emit(this.generalForm.value);
  }

  changeTimeDate() {
    const tt = this.generalForm.get('time').value.split(':');
    this.date = new Date(this.challenge.dateTimePlanned);
    this.date.setHours(parseInt(tt[0]) + 1);
    this.date.setMinutes(parseInt(tt[1]));
    this.generalForm.patchValue({
      dateTimePlanned: this.date.getTime(),
    });
  }
}
