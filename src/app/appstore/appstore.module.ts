import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppstoreRoutingModule } from './appstore-routing.module';
import { AppstoreComponent } from './appstore/appstore.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppstoreComponent
  ],
  imports: [
    CommonModule,
    AppstoreRoutingModule,
    HttpClientModule
  ]
})
export class AppstoreModule { }

