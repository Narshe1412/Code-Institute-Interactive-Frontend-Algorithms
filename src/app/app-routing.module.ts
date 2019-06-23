import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [{ path: 'chart', component: BarchartComponent }, { path: 'setup', component: SetupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
