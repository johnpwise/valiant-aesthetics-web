import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public isLoggedIn: boolean = false;
  public publicAppPages = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Login', url: '/login', icon: 'login'}
  ];

  public clientAppPages = [
    {title: 'Account', url: '/account', icon: 'settings'}
  ];

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;

      if (!res) {
        // check localStorage once implented
      }
    });
  }

  public ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
