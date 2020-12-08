import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedHomeShellComponent } from 'src/app/shared/components/shared-home/shared-home-shell/shared-home-shell.component';

const routes: Routes = [
    {
        path: '',
        component: SharedHomeShellComponent
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
