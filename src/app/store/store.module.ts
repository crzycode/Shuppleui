import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { StoreRoutingModule } from './store-routing.module';
import { MystoreComponent } from './mystore/mystore.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MystoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,

  ]
})
export class StoreModule { }
