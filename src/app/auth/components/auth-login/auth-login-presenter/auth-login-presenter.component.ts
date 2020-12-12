import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-auth-login-presenter',
  templateUrl: './auth-login-presenter.component.html',
  styleUrls: ['./auth-login-presenter.component.scss']
})
export class AuthLoginPresenterComponent implements OnInit {
  
  darkMode: string;
  
  @Input() generalForm: FormGroup;

  @Output() submitForm = new EventEmitter();
  
  onSubmit(): void {
    this.submitForm.emit();
  }
  
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.getDarkModeFromLS();
    this.sharedService.darkMode.subscribe(v => this.darkMode = v);
  }

  toggleDarkMode(): void {
    if (this.darkMode == 'light') {
      this.sharedService.setDarkMode('dark');
    } else {
      this.sharedService.setDarkMode('light');
    }
  }

}
