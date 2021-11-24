import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";

import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {AngularFireModule} from "@angular/fire/compat";
// import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

import {MaterialComponentsModule} from "./material-components/material-components.module";
import {AccountModule} from "./client/account/account.module";
import {PublicModule} from "./public/public.module";

import {AppComponent} from './app.component';
import {LoginComponent} from './public/login/login.component';
import {HomeComponent} from './public/home/home.component';
import {SideNavMyAccountComponent} from './client/side-nav-my-account/side-nav-my-account.component';
import {SideNavItemComponent} from './common/side-nav-item/side-nav-item.component';
import {LogoutComponent} from './client/logout/logout.component';
import {PersonalTrainingComponent} from './public/personal-training/personal-training.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideNavMyAccountComponent,
    SideNavItemComponent,
    LogoutComponent,
    PersonalTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    MaterialComponentsModule,
    PublicModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
