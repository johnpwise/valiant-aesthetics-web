import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { OnlineCoachingComponent } from './online-coaching/online-coaching.component';
import { AboutComponent } from './about/about.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    OnlineCoachingComponent,
    AboutComponent,
    NutritionComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
