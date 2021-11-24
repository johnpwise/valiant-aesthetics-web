import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {AngularFireModule} from "@angular/fire/compat";

import {MaterialComponentsModule} from "./material-components/material-components.module";
import {AccountModule} from "./client/account/account.module";

import {AppComponent} from './app.component';
import {LoginComponent} from './public/login/login.component';
import {HomeComponent} from './public/home/home.component';
import {SideNavMyAccountComponent} from './client/side-nav-my-account/side-nav-my-account.component';
import { SideNavItemComponent } from './common/side-nav-item/side-nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideNavMyAccountComponent,
    SideNavItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    MaterialComponentsModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
