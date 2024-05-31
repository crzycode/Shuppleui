import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppstoreComponent } from './appstore/appstore.component';

const routes: Routes = [{path:'',component:AppstoreComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppstoreRoutingModule { }
