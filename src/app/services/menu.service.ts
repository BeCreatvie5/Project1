import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems:MenuItem[]=[
    new MenuItem(
      'Jonna Rottelu',
      'It is a healthy item',
       'Jonna Rottelu.jpg'
    ),
    new MenuItem(
      'Sajja Rottelu',
      'It is a healthy item',
       'Sajja Rottelu.jpg'
    ),
    new MenuItem(
      'Nuvuulu Rottelu',
      'It is a healthy item',
       'black sasame seed Sajja Rottelu.jpg'
    ),
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    ),
    
    new MenuItem(
      'Raagi Mudda and Natukodi Chicken',
      'It is the Special Item from Rayala Seema',
       'RaagiMuddaChicken.jpg'
    )
    
  ]
  constructor() { }
  getMenuItems():MenuItem[]{
    return this.menuItems;
  }
  getImagePath(imageFileName:string):string{
    return `assets/images/${imageFileName}`;
  }
}
