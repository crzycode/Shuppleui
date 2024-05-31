import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:2027/api'; // Change if needed

  constructor(private http: HttpClient) {}

  createOrder(amount: number,Appid:any): Observable<any> {
    
    return this.http.post<any>(`${this.baseUrl}/payment/create/${Appid}`, { amount });
  }

  verifyPayment(paymentDetails:any,Appid:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/payment/verify/${Appid}`, paymentDetails);
  }
  Getallapp():Observable<any>{
    return this.http.get("http://localhost:2027/api/appstore/getapp")
  }
}