import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'template',
  loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
},
{
  path: 'reactive',
  loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule ),
},
{
  path: '**',
  redirectTo: 'template'
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
