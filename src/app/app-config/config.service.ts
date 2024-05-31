import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private baseUrl = 'http://localhost:2027/api'; 
  constructor(private http:HttpClient,private router:Router) { }
  getstoreApp():Observable<any>{
    return this.http.get(`${this.baseUrl}/store/getall`)
  }
  addRoute(parentpath:string,path: string, loadChildren: () => Promise<any>): Promise<any> {
    return new Promise((resolve,reject) =>{
      const currentConfig:any = this.router.config;
      for(let i =0; i < currentConfig.length; i++){
        if(currentConfig[i].path == parentpath){
          currentConfig[i]['_loadedRoutes'][0].children.push({path,loadChildren})
          this.router.resetConfig(currentConfig)
          resolve(`/${parentpath}/${path.toLowerCase()}`)
        }
      }
    })

  }

}
