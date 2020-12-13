import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-user-profile-shell',
  templateUrl: './user-profile-shell.component.html',
  styleUrls: ['./user-profile-shell.component.scss']
})
export class UserProfileShellComponent implements OnInit {

  preloader$: Observable<Boolean>;
  user$: Observable<IUserDetails>;
  file: File;
  id: string;
  sub: Subscription;
  generalForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
    });
    this._userService.loadUserDetails(this.id);
    this.user$ = this._userService.userDetails$.asObservable();
    this.preloader$ = this._userService.isLoading$.asObservable();
    this.sub = this.user$.subscribe(user => {
      this.loadForm(user)
    });
  }

  loadForm(user: IUserDetails): void {
    if (user) {
      this.generalForm = this.fb.group({
        firstName: [user.firstName, Validators.required],
        lastName: [user.lastName, Validators.required],
        dateOfBirth: [this.datePipe.transform(user.dateOfBirth, 'yyyy-MM-dd'), Validators.required],
        email: [user.email, Validators.required],
        password: ['']
      });
    } else {
      this.generalForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        email: ['', Validators.required],
        password: ['']
      });
    }
  }

  onFileChanged(file: File): void {
    this.file = file;
    this.generalForm.markAsDirty();
  }

  submitForm() {
    const formData = new FormData();
    formData.append('firstName', this.generalForm.get('firstName').value);
    formData.append('lastName', this.generalForm.get('lastName').value);
    formData.append('dateOfBirth', this.generalForm.get('dateOfBirth').value);
    formData.append('email', this.generalForm.get('email').value);

    if (this.file) {
      formData.append('image', this.file);
    }

    if (this.generalForm.get('password').value != '') {
      formData.append('password', this.generalForm.get('password').value);
    }

    this._userService.updateCurrentUser(this.id, formData);

    this.location.back();
  }

}
