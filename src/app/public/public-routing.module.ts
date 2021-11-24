import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {PersonalTrainingComponent} from "./personal-training/personal-training.component";
import {OnlineCoachingComponent} from "./online-coaching/online-coaching.component";
import {AboutComponent} from "./about/about.component";
import {NutritionComponent} from "./nutrition/nutrition.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'personal-training',
    component: PersonalTrainingComponent
  },
  {
    path: 'online-coaching',
    component: OnlineCoachingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'nutrition',
    component: NutritionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
