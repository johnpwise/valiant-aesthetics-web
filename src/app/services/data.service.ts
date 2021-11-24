import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public email: string = '';

  constructor(private firestore: AngularFirestore) {
  }

  public getUserProfileById(id: string): Observable<User> {
    if (this.email === '') {
      this.email = id;
    }

    // @ts-ignore
    return this.firestore
      .collection<User>('user-collection')
      .doc(id)
      .valueChanges();
  }

  public createUserProfile(user: User): Promise<void> {
    return this.firestore
      .collection<User>('user-collection')
      .doc(user.email)
      .set({
        email: user.email,
        username: user.username,
        pushToken: '',
        access: ''
      });
  }

  public editUserProfile(user: User): Promise<void> {
    return this.firestore
      .collection("user-collection")
      .doc(user.email)
      .update({
        email: user.email,
        username: user.username,
        pushToken: user.pushToken,
        access: user.access
      });
  }
}
