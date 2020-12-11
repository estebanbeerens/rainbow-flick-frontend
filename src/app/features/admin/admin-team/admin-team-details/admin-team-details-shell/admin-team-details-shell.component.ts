import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-team-details-shell',
  templateUrl: './admin-team-details-shell.component.html',
  styleUrls: ['./admin-team-details-shell.component.scss'],
})
export class AdminTeamDetailsShellComponent implements OnInit {
  team$: Observable<ITeamDetails>;
  action: string;

  constructor(
    public dialogRef: MatDialogRef<AdminTeamDetailsShellComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public fb: FormBuilder,
    private _teamService: TeamService
  ) {
    this.action = data.action;
    this.team$ = this._teamService.teamDetails$.asObservable();
  }

  ngOnInit(): void {}

  createTeamsForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
  });

  submitForm() {
    console.log('SUMBIT');
    //TODO Create new teams
    if (this.action == 'CREATE') {
      //TODO Create update teams
    } else if (this.action == 'UPDATE') {
    }
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
