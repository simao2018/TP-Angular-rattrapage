import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../Models/User';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    // @ts-ignore
    this.users = this.afs.collection('users').valueChanges();
  }

  getUsers(){
    return this.users;
  }

}

