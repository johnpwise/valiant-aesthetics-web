import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private _user: User = new User();

  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  public login(): void {
    // this.dataService.getUserProfileById(this.email).subscribe((res) => {
    //   this.authService.setDisplayedUsername(res.username);
    //
    //   let authObj = this.authService.fetchLocalStorage('auth');
    //   if (authObj !== null) {
    //     authObj.username = res.username;
    //
    //     // save back
    //     localStorage.setItem('auth', JSON.stringify(authObj));
    //   }
    // });

    this.authService.login(
      this.email,
      this.password
    );
  }
}
