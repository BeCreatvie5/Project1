import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/menu.model';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';
import { Router } from 'express';
import { SharedService } from '../services/sharedservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuItems!:MenuItem[]
  // menu.component.ts

  constructor(public menuService: MenuService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  addToCart(item: MenuItem): void {
    this.sharedService.addToCart(item);
  }
}

