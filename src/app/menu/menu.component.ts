import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuItems!:MenuItem[]
  constructor(public menuService:MenuService){}
  ngOnInit(): void {
    this.menuItems=this.menuService.getMenuItems();
  }

}
