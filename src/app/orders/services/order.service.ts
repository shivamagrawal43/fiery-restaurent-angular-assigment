import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  constructor(private http:HttpClient) { }

  orderinfo:any={
    id:"",
    ContactName:"",
    OrderDate:"",
    OrderTotal:0,
    itemsOrdered:[],
    TaxTotal:0,
    GrandTotal:0,
  }

 
  getAll(){
   return  this.http.get('http://localhost:8099/orders');
  }

  addOrder(orderdata:any):Observable<any>{
    return this.http.post('http://localhost:8099/orders',orderdata);

}
}