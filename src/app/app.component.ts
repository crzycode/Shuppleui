import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { DynamicRouteService } from './Dynamic.route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Data:any[]=[]
  title = 'Shuppleui';
/**
 *
 */
constructor(private app:AppService,private router:Router,private DynamicRoute:DynamicRouteService) {

  
}
  ngOnInit(): void {

  }

}
