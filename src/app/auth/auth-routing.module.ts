import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginShellComponent } from 'src/app/auth/components/auth-login/auth-login-shell/auth-login-shell.component';
import { AuthRegisterShellComponent } from 'src/app/auth/components/auth-register/auth-register-shell/auth-register-shell.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginShellComponent,
  },
  {
    path: 'register',
    component: AuthRegisterShellComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
