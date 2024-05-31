import { Component, OnInit } from '@angular/core';
import { AppstoreService } from '../appstore.service';

@Component({
  selector: 'app-appstore',
  templateUrl: './appstore.component.html',
  styleUrls: ['./appstore.component.css']
})
export class AppstoreComponent implements OnInit{

  Data:any[]=[]
  constructor(private appstore:AppstoreService) {
   
    
  }
  ngOnInit(): void {
    this.appstore.Getallapp().subscribe(res =>{
      console.log(res)
      this.Data = res
    })
  }
  installing(data: any) {
    this.appstore.update(data).subscribe(res =>{
      console.log(res)
    })
    }
}
