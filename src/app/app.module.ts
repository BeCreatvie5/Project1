import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LordIconDirective } from './shared/Icons.directive';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from './services/menu.service';
import { InfoComponent } from './aboutus/info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { SharedService } from './services/sharedservice';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    MenuService,
    CartService,
    SharedService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
