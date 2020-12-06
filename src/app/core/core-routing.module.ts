import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreContentComponent } from 'src/app/core/components/content/content.component';

const routes: Routes = [
	{
		path: '',
		component: CoreContentComponent,
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
