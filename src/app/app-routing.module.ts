import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'menu', component:MenuComponent
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'cart', component:OrdersComponent
  },
  {
    path:'aboutus', component:AboutusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
