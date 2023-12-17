import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LordIconDirective } from './shared/Icons.directive';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from './services/menu.service';
import { InfoComponent } from './aboutus/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LordIconDirective,
    MenuComponent,
    HomeComponent,
    OrdersComponent,
    AboutusComponent,
    FooterComponent,
    InfoComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }