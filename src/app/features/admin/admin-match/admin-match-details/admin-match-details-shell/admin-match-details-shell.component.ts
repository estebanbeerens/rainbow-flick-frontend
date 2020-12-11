import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { IMatchDetail } from 'src/app/shared/interfaces/match/match-details.model';

@Component({
  selector: 'app-admin-match-details-shell',
  templateUrl: './admin-match-details-shell.component.html',
  styleUrls: ['./admin-match-details-shell.component.scss'],
})
export class AdminMatchDetailsShellComponent implements OnInit {
  match$: Observable<IMatchDetail>;
  action: string;

  constructor(
    public dialogRef: MatDialogRef<AdminMatchDetailsShellComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public fb: FormBuilder,
    private _matchService: MatchService
  ) {
    this.action = data.action;
    this.match$ = this._matchService.matchDetails$.asObservable();

    console.log(this.action);
  }

  ngOnInit(): void {}

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    imageUrl: ['', [Validators.required]],
    contactName: ['', [Validators.required, Validators.minLength(3)]],
    contactPhone: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
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
