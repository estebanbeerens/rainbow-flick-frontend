import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreContentComponent } from 'src/app/core/components/content/content.component';

const routes: Routes = [
	{
		path: '',
    component: CoreContentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('../shared/shared.module').then(m => m.SharedModule) },
      { path: 'user', loadChildren: () => import('../features/user/user.module').then(m => m.UserModule) },
      { path: 'admin', loadChildren: () => import('../features/admin/admin.module').then(m => m.AdminModule) },
      { path: '**', redirectTo: 'home' }
    ]
	},
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
