import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { HomeConfigComponent } from './home-config/home-config.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{path:'',component:ConfigComponent,children:[
  {path:'config',component:HomeConfigComponent},
  

]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppConfigRoutingModule { }
