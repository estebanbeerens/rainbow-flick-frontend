import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-user-details-shell',
  templateUrl: './admin-user-details-shell.component.html',
  styleUrls: ['./admin-user-details-shell.component.scss'],
})
export class AdminUserDetailsShellComponent implements OnInit {

  preloader$: Observable<Boolean>;
  user$: Observable<IUserDetails>;
  file: File;
  id: string;
  isNew: boolean;
  title: string;
  sub: Subscription;
  generalForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
    });
    this._userService.loadUserDetails(this.id);
    this.user$ = this._userService.userDetails$.asObservable();
    this.preloader$ = this._userService.isLoading$.asObservable();
    this.sub = this.user$.subscribe(user => {
      this.defineIsNew(user),
      this.loadForm(user)
    });
  }

  defineIsNew(user: IUserDetails): void {
    if (user?.id == '' ){
      this.isNew = true;
      this.title = "Admin aanmaken";
    } else {
      this.isNew = false;
      this.title = "Gebruiker bewerken";
    }
  }

  loadForm(user: IUserDetails): void {
    if (user?.id == '') {
      this.generalForm = this.fb.group({
        firstName: [user.firstName, Validators.required],
        lastName: [user.lastName, Validators.required],
        dateOfBirth: [this.datePipe.transform(user.dateOfBirth, 'yyyy-MM-dd'), Validators.required],
        email: [user.email, Validators.required],
        password: ['', Validators.required],
        imageURL: [user.imageURL],
      });
    } else if (user) {
      this.generalForm = this.fb.group({
        firstName: [user.firstName, Validators.required],
        lastName: [user.lastName, Validators.required],
        dateOfBirth: [this.datePipe.transform(user.dateOfBirth, 'yyyy-MM-dd'), Validators.required],
        email: [user.email, Validators.required],
        imageURL: [user.imageURL],
      });
    } else {
      this.generalForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        imageURL: [''],
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

    if (this.isNew) {
      formData.append('password', this.generalForm.get('password').value);
      this._userService.createAdmin(formData);
    } else {
      this._userService.updateUser(this.id, formData);
    }

    this.router.navigate(['/app/admin/user']);
  }
  
}
