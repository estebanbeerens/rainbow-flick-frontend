import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-register-shell',
  templateUrl: './auth-register-shell.component.html',
  styleUrls: ['./auth-register-shell.component.scss']
})
export class AuthRegisterShellComponent implements OnInit {
  
  generalForm: FormGroup;
  file: File;
  id: string;

  constructor(
    public fb: FormBuilder,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.generalForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      imageURL: [''],
    });
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
    formData.append('password', this.generalForm.get('password').value);

    if (this.file) {
      formData.append('image', this.file);
    }

    this._userService.register(formData);
  }

}
