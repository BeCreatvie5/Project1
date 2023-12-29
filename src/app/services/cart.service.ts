import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/menu.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
  }
  constructor() { }
}
