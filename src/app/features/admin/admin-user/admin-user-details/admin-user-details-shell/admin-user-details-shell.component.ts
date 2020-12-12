import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    public fb: FormBuilder,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this._userService.userDetails$.asObservable();
  }

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    imageUrl: ['', [Validators.required]],
    contactName: ['', [Validators.required, Validators.minLength(3)]],
    contactPhone: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitForm() {
    
  }
  
}
