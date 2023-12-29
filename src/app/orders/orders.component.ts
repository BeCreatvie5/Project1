// cart.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { SharedService } from '../services/sharedservice';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../shared/menu.model';

@Component({
  selector: 'app-cart',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnDestroy {
  cartItems: MenuItem[] = [];
  private cartItemSubscription: Subscription;
  private selectedItem: MenuItem | null = null;

  constructor(private sharedService: SharedService, public menuService: MenuService) {
    this.cartItemSubscription = this.sharedService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    this.cartItemSubscription.unsubscribe();
  }

  toggleDescription(item: MenuItem): void {
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }

  showDescription(item: MenuItem): boolean {
    return this.selectedItem === item;
  }
}
