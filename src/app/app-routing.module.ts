import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'Main', component: MainComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'About', component: AboutComponent },
  { path: '',   redirectTo: '/Main', pathMatch: 'full' },
  { path: "**", redirectTo: "/Main" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
