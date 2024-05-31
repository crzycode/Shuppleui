import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { DynamicRouteService } from '../../Dynamic.route.service';
import { Router, Routes } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit{
  Scripts:any
  Data:any[]=[]
constructor(private DynamicRoute:DynamicRouteService,private router:Router,private config:ConfigService) {
  
  
}
  ngOnInit(): void {
    this.config.getstoreApp().subscribe(res =>{
      console.log(res)
      this.Data = res[0].Apps
    })
  }
  Routepage(arg: any) {
    console.log(arg)
    this.config.addRoute('config',arg.toLowerCase(),() =>{
      return loadRemoteModule({
        remoteEntry:`http://localhost:8080/App/${arg}/Frontend/${arg.toLowerCase()}.js`,
        remoteName:`${arg.toLowerCase()}`,
        exposedModule:"./AppModule"
      }).then(r => r.AppModule).catch(e => console.log(e))
    }).then(res =>{
      this.router.navigate([res])
    })
  }
}
