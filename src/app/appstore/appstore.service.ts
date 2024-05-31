import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstoreService {
  constructor(private http:HttpClient) { }

  Getallapp():Observable<any>{
    return this.http.get("http://localhost:2027/api/appstore/getapp")
  }
  update(data:any):Observable<any>{
    return this.http.post("http://localhost:2027/api/store/update",data)
  }
}
