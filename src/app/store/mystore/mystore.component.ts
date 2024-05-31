import { Component, Injector, OnInit } from '@angular/core';
import { PaymentService } from '../store.service';
import { ConfigService } from 'src/app/app-config/config.service';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HttpClient } from '@angular/common/http';

declare var Razorpay:any


@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent implements OnInit{

  App:any[] =[]
  App_id:any
  App_name: any;
  constructor(private paymentService: PaymentService,private config:ConfigService) {}
  ngOnInit(): void {
    this.config.getstoreApp().subscribe(res =>{
      console.log(res)
      this.App = res[0].Apps
    })
  }
  GetAppid(Appid: any) {
    this.App_id = Appid.App_id
    this.App_name = Appid.App_name.toLowerCase()
    console.log(this.App_id)
    }
  pay(amount: number) {
    this.paymentService.createOrder(amount,this.App_id).subscribe(order => {
      console.log(order)
      loadRemoteModule({
        remoteEntry:`http://localhost:8080/App/${this.App_id.toLowerCase()}/Frontend/${this.App_id.toLowerCase()}.js`,
        remoteName:`${this.App_id.toLowerCase()}`,
        exposedModule:"./ResponseService"
      }).then(r => {
       var dat = new r.ResponseService(HttpClient)
       order.App_id = this.App_id
       dat.Responser(order).then((res:any) =>{
        console.log(res)
       })
      }).catch(e => console.log(e))
    });

  }
}
