import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',loadChildren:() => import('./store/store.module').then(m => m.StoreModule)},
{path:'app',loadChildren:() => import('./appstore/appstore.module').then(m => m.AppstoreModule)},
{path:'config',loadChildren:() => import('./app-config/app-config.module').then(m => m.AppConfigModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routbyid = async() =>{
  return localStorage.getItem("appid")
}
