import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreContentComponent } from 'src/app/core/components/content/content.component';
import { AdminCreateGuard } from 'src/app/security/guards/admin-create.guard';

const routes: Routes = [
	{
		path: '',
    component: CoreContentComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', loadChildren: () => import('../features/user/user.module').then(m => m.UserModule) },
      { path: 'admin', loadChildren: () => import('../features/admin/admin.module').then(m => m.AdminModule),canActivate: [AdminCreateGuard] },
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
