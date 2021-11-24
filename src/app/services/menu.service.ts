import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MenuItem} from "../models/menu-item.model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = [
    {title: 'Home', url: '/home', icon: 'home', access: 'public', display: true},
    {title: 'Login', url: '/login', icon: 'login', access: 'public', display: true},
    {title: 'Logout', url: '/home', icon: 'logout', access: 'client', display: false},
    {title: 'Account', url: '/account', icon: 'settings', access: 'client', display: false}
  ];

  public menuItems$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>(this.menuItems);

  constructor() {
  }

  public setMenuItemsStatus(menuItems: MenuItem[]) {
    this.menuItems$.next(menuItems);
  }

  public updateMenuItemsForClient(): void {
    this.menuItems$.next(this.setMenuItemsForClient());
  }

  private setMenuItemsForClient(): MenuItem[] {
    return [
      {title: 'Home', url: '/home', icon: 'home', access: 'public', display: true},
      {title: 'Login', url: '/login', icon: 'login', access: 'public', display: false},
      {title: 'Account', url: '/account', icon: 'settings', access: 'client', display: true},
      {title: 'Logout', url: '/home', icon: 'logout', access: 'client', display: true}
    ];
  }
}
