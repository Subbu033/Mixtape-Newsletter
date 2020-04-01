import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';

const routes: Routes = [ 
  {
    path: 'template1',
    component: Template1Component,
  },
  {
    path: 'template2',
    component: Template2Component,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
