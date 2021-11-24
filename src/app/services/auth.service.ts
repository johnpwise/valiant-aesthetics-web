import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject} from "rxjs";
import {Auth} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedInUsername$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _auth: Auth = new Auth();

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  public setLoggedInStatus(isLoggedIn: boolean): void {
    this.isLoggedIn$.next(isLoggedIn);
  }

  public setDisplayedUsername(username: string): void {
    this.loggedInUsername$.next(username);
  }

  public fetchLocalStorage(key: string): any {
    let authObjStr = JSON.parse(<string>localStorage.getItem(key));
    if (authObjStr !== null) {
      return authObjStr;
    }

    return '';
  }

  public login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this._auth = new Auth();
        this._auth.loggedIn = new Date();
        this._auth.username = value.user?.email;

        localStorage.setItem('auth', JSON.stringify(this._auth));

        this.setDisplayedUsername(this._auth.username || '');
        this.setLoggedInStatus(true);

        this.router.navigateByUrl('/account');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
        // this.toastService.showToastMessage('Login failed', 'danger').then(() => {
        // });
      });
  }

  // public getLoggedInStatus(): Observable<boolean> {
  //   return this.isLoggedIn$.asObservable();
  // }
  //
  // public isLoggedIn(): boolean {
  //   return this.isLoggedIn$.value;
  // }

  public logout(): void {
    // localStorage.removeItem('auth');
    // this.setLoggedInStatus(false);
    //
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('auth');
      this.setLoggedInStatus(false);
    });
  }

  public fetchUsernameToDisplay(): string {
    return this.getUsernameFromUserProfile();
  }

  private getUsernameFromUserProfile(): string {
    let authObj = this.fetchLocalStorage('auth');
    if (authObj !== null) {
      return authObj.username;
    } else {
      return '';
    }
  }
}
