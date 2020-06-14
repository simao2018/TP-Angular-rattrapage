import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment} from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from "./services/user.service";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from './auth/auth.component';
import { ListComponent } from './list/list.component';
import { FourComponent } from './four/four.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListComponent,
    FourComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'tp'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
