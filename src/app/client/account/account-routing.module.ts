import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountTestComponent} from "./account-test/account-test.component";

const routes: Routes = [
  {
    path: '',
    component: AccountTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
