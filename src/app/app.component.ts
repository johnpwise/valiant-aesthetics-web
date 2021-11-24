import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AuthService} from "./services/auth.service";
import {MenuService} from "./services/menu.service";
import {MenuItem} from "./models/menu-item.model";
import {Auth} from "./models/auth.model";

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
      this.isLoggedIn = res;

      if (this.isLoggedIn) {
        // update the menu items accordingly
        this.menuService.updateMenuItemsForClient();
      }

      if (!res) {
        let authObjStr = JSON.parse(<string>localStorage.getItem('auth'));
        let authObj: Auth = new Auth();

        if (authObjStr !== null) {
          this.isLoggedIn = true;
          this.menuService.updateMenuItemsForClient();

          // if (authObj.username !== null || authObj.username !== '') {
          //   this.authService.userNameEventStream.next(authObj.username);
          // }
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
}
