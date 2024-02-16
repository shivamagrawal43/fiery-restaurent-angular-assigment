import { Items } from "./items";

export class Order{Id:number | undefined;
ContactName:string="";
OrderDate:Date | undefined;
ItemsOrdered:Items[] | undefined;
OrderTotal:number=0
TaxTotal:number=0
GrandTotal:number=0;

}