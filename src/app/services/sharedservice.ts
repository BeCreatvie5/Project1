// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../shared/menu.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private cartItemsSubject = new BehaviorSubject<MenuItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(item: any): void {
    const currentItems = this.cartItemsSubject;
    this.cartItemsSubject.next([item]);
  }
}
