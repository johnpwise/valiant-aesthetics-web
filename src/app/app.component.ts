import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AuthService} from "./services/auth.service";
import {MenuService} from "./services/menu.service";
import {MenuItem} from "./models/menu-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public isLoggedIn: boolean = false;
  public menuItems: MenuItem[] = [];

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
              private authService: AuthService,
              private menuService: MenuService) {
  }

  public ngOnInit(): void {
    this.menuService.menuItems$.subscribe((menuItems) => {
      this.menuItems = menuItems;
    }, error => {
    }, () => {
    });

    this.authService.isLoggedIn$.subscribe((res) => {
      if (res) {
        this.setClientLoggedInStatus();
      } else {
        this.setPublicStatus();
      }

      if (!this.isLoggedIn) {
        let authObjStr = JSON.parse(<string>localStorage.getItem('auth'));

        // if it exists
        if (authObjStr !== null) {
          this.setClientLoggedInStatus();
        } else {
          this.setPublicStatus();
        }
      }
    }, error => {
    }, () => {
    });
  }

  public ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  private setClientLoggedInStatus(): void {
    this.isLoggedIn = true;
    this.menuService.updateMenuItemsForClient();
  }

  private setPublicStatus(): void {
    this.isLoggedIn = false;
    this.menuService.updateMenuItemsForPublic();
  }
}
