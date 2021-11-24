import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MenuItem} from "../models/menu-item.model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = MenuService.setMenuItemsForPublic();

  public menuItems$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>(this.menuItems);

  constructor() {
  }

  private static setMenuItemsForPublic(): MenuItem[] {
    return [
      {title: 'Home', url: '/home', icon: 'home'},
      {title: 'Personal Training', url: '/personal-training', icon: 'people'},
      {title: 'Online Coaching', url: '/online-coaching', icon: 'people'},
      {title: 'About', url: '/about', icon: 'info'},
      {title: 'Nutrition', url: '/nutrition', icon: 'restaurant'},
      {title: 'Contact', url: '/contact', icon: 'email'},
      {title: 'Login', url: '/login', icon: 'login'}
    ];
  }

  private static setMenuItemsForClient(): MenuItem[] {
    return [
      {title: 'Home', url: '/home', icon: 'home'},
      {title: 'Account', url: '/account', icon: 'settings'},
      {title: 'Logout', url: '/logout', icon: 'logout'}
    ];
  }

  public setMenuItemsStatus(menuItems: MenuItem[]) {
    this.menuItems$.next(menuItems);
  }

  public updateMenuItemsForClient(): void {
    this.setMenuItemsStatus(MenuService.setMenuItemsForClient());
  }

  public updateMenuItemsForPublic(): void {
    this.setMenuItemsStatus(MenuService.setMenuItemsForPublic());
  }
}
