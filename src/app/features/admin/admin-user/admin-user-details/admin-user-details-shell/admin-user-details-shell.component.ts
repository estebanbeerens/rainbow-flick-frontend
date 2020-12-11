import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-user-details-shell',
  templateUrl: './admin-user-details-shell.component.html',
  styleUrls: ['./admin-user-details-shell.component.scss'],
})
export class AdminUserDetailsShellComponent implements OnInit {
  user$: Observable<IUserDetails>;
  action: string;

  constructor(
    public dialogRef: MatDialogRef<AdminUserDetailsShellComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public fb: FormBuilder,
    private _userService: UserService
  ) {
    this.action = data.action;
    this.user$ = this._userService.userDetails$.asObservable();

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
