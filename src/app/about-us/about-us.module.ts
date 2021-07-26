import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'ionic4-auto-complete';

import { ComponentModule } from '../components/components.module';
import { ConfigService } from '../config/config.sevice';
import { AboutUsPage } from './about-us.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentModule,
    AutoCompleteModule,
    RouterModule.forChild([
      { path: '',
       component: AboutUsPage }])
  ],
  declarations: [AboutUsPage],
  providers: [ConfigService]
})
export class AboutUsPageModule {}
