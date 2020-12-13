import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-auth-register-presenter',
  templateUrl: './auth-register-presenter.component.html',
  styleUrls: ['./auth-register-presenter.component.scss']
})
export class AuthRegisterPresenterComponent implements OnInit {
  
  darkMode: string;

  @Input() generalForm: FormGroup;

  @Output() submitForm = new EventEmitter();
  @Output() fileChanged = new EventEmitter<File>();
  
  onSubmit(): void {
    this.submitForm.emit();
  }

  onFileChanged(file: File): void {
    this.fileChanged.emit(file);
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
