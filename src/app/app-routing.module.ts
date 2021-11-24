import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';

import {LogoutComponent} from "./client/logout/logout.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./client/account/account.module').then(m => m.AccountModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
