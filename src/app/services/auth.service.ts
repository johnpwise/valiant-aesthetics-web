import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth) { }

  public setLoggedInStatus(isLoggedIn: boolean): void {
    this.isLoggedIn$.next(isLoggedIn);
  }

  public getLoggedInStatus(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  public isLoggedIn(): boolean {
    return this.isLoggedIn$.value;
  }


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

        this.setLoggedInStatus(true);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
        // this.toastService.showToastMessage('Login failed', 'danger').then(() => {
        // });
      });
  }
}
