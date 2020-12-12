import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  title: string;
  sub: Subscription;
  generalForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _userService: UserService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this._userService.loadUserDetails(p.id);
    });
    this.user$ = this._userService.userDetails$.asObservable();
    this.preloader$ = this._userService.isLoading$.asObservable();
    this.sub = this.user$.subscribe(user => {
      this.defineIsNew(user),
      this.loadForm(user)
    });
  }

  defineIsNew(user: IUserDetails): void {
    if (user?.id == '' ){
      this.title = "Admin aanmaken";
    } else {
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

  submitForm() {
    
  }
  
}
