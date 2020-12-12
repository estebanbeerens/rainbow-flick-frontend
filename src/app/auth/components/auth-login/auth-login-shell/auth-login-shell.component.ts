import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-login-shell',
  templateUrl: './auth-login-shell.component.html',
  styleUrls: ['./auth-login-shell.component.scss']
})
export class AuthLoginShellComponent implements OnInit {

  generalForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.generalForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm(): void {    
    this._userService.login({
      email: (this.generalForm.get('email').value).toString(),
      password: (this.generalForm.get('password').value).toString()
    });
  }

}
