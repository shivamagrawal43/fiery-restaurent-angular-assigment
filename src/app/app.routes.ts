import { Routes } from '@angular/router';
import { VeiwOrdersComponent } from './orders/veiw-orders/veiw-orders.component';
import { HeaderComponent } from './header/header.component';
import { ViewOrderInfoComponent } from './orders/view-order-info/view-order-info.component';
import { PlaceOrderComponent } from './orders/place-order/place-order.component';

export const routes: Routes = [
    {path:'orders-placed',component:PlaceOrderComponent},
    {path:'view-orders',component:VeiwOrdersComponent},
    {path:'view-order-info',component:ViewOrderInfoComponent},
    {path:'view-orders/view-order-info',component:ViewOrderInfoComponent},
    {path:"place-order",component:PlaceOrderComponent,}

  
];
