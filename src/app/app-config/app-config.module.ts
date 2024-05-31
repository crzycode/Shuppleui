import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppConfigRoutingModule } from './app-config-routing.module';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeConfigComponent } from './home-config/home-config.component';


@NgModule({
  declarations: [
    ConfigComponent,
    HomeConfigComponent
  ],
  imports: [
    CommonModule,
    AppConfigRoutingModule,
    HttpClientModule
  ]
})
export class AppConfigModule { }
