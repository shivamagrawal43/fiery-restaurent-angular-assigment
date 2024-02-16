import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../services/order.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-veiw-orders',
  standalone: true,
  imports: [RouterOutlet , CommonModule,RouterLink, MatCardModule,
    MatButtonModule],
  templateUrl: './veiw-orders.component.html',
  styleUrl: './veiw-orders.component.css'
 , providers:[OrderService],
})
export class VeiwOrdersComponent {
  constructor(private http:HttpClient,private service:OrderService){}
  orderdata=new Array();


orderinfo:any={
  id:"",
  ContactName:"",
  OrderDate:"",
  OrderTotal:0,
  TaxTotal:0,
  GrandTotal:0,
}


getallorders(){ 
   this.service.getAll().subscribe((data:any)=>{
      this.orderdata=data;
      console.log(this.orderdata);
    
    })};


ngOnInit(){
  this.getallorders();
}

fetchOrderInfo(id:string){
    
  // const c = this.orderdata.find((p:any)=>{
  //   return p.id === id
  // })
  // console.log(c.id)

  // this.orderinfo.id=c.id;
  // this.orderinfo.ContactName=c.contactName;
  // this.orderinfo.OrderDate=c.orderDate;
  // this.orderinfo.TaxTotal=c.taxTotal ;
  // this.orderinfo.GrandTotal=c.grandTotal;

}

}
