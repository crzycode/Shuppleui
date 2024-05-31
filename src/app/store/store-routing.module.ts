import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MystoreComponent } from './mystore/mystore.component';

const routes: Routes = [{path:'',component:MystoreComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
