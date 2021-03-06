import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-side-nav-my-account',
  templateUrl: './side-nav-my-account.component.html',
  styleUrls: ['./side-nav-my-account.component.scss']
})
export class SideNavMyAccountComponent implements OnInit {
  public username: string = '';

  constructor(private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.authService.loggedInUsername$.subscribe((res) => {
      this.username = this.authService.fetchUsernameToDisplay();
    }, error => {
    }, () => {
    });
  }
}
