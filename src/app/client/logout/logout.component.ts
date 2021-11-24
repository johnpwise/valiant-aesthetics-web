import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService,
              private menuService: MenuService) { }

  public ngOnInit(): void {
    this.authService.logout();
    this.menuService.updateMenuItemsForPublic();
  }

  public ngOnDestroy() {
    this.authService.logout();
    this.menuService.updateMenuItemsForPublic();
  }
}
