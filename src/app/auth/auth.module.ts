import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginShellComponent } from './components/auth-login/auth-login-shell/auth-login-shell.component';
import { AuthLoginPresenterComponent } from './components/auth-login/auth-login-presenter/auth-login-presenter.component';
import { AuthRegisterPresenterComponent } from './components/auth-register/auth-register-presenter/auth-register-presenter.component';
import { AuthRegisterShellComponent } from './components/auth-register/auth-register-shell/auth-register-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthLoginShellComponent, 
    AuthLoginPresenterComponent, 
    AuthRegisterPresenterComponent, 
    AuthRegisterShellComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
