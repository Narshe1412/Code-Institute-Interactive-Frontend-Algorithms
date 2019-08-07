import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { SetupComponent } from './setup/setup.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: 'chart', component: BarchartComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
