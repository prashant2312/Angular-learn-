import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules,PreloadingStrategy } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  // {path:"login",redirectTo:"/register",pathMatch:"full"},
  { path: "login", component: LoginComponent },
  // {path:"about",component:AboutComponent},
  { path: "profile/:name/:id", component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer', loadChildren:()=> import("./customer/customer.module").then(mod => mod.CustomerModule),component:CustomerComponent
},
{path:"customerdetails",component:CustomerdetailsComponent,outlet:"customerList"},
// {
//   path:"order",loadChildren:()=>import ('./order/order.module').then(m=>m.OrderModule),component:OrderComponent
// },
{
  path:"order",component:CustomerdetailsComponent,outlet:"customerOrder"
},
// {path: "customer", loadChildren:'./customer/Customer.module#CustomerModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
