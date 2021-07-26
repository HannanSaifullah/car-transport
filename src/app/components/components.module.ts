import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class ComponentModule {}
