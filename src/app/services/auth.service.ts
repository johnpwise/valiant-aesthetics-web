import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        // this._auth = new Auth();
        // this._auth.loggedIn = new Date();
        // this._auth.username = value.user.email;
        //
        // localStorage.setItem('auth', JSON.stringify(this._auth));
        //
        // this.updateOnScreenUserName(value.user.email);
        //
        // this.router.navigateByUrl('/account');
        console.log('SUCCESS ' + value.user?.email);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
        // this.toastService.showToastMessage('Login failed', 'danger').then(() => {
        // });
      });
  }
}
