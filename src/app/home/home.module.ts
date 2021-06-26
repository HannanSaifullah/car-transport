import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'ionic4-auto-complete';

import { ComponentModule } from '../components/components.module';
import { HomePage } from './home.page';
import { ConfigService } from '../config/config.sevice';
import { FilterSuburbService } from './filterSuburbService';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentModule,
    AutoCompleteModule,
    RouterModule.forChild([
      { path: '',
       component: HomePage }])
  ],
  declarations: [HomePage],
  providers: [ConfigService,FilterSuburbService]
})
export class HomePageModule {}
