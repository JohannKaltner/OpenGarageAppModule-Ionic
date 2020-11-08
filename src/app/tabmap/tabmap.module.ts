import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabMapPage } from './tabmap.page';

import { TabMapPageRoutingModule } from './tabmap-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabMapPageRoutingModule
  ],
  declarations: [TabMapPage]
})
export class TabMapPageModule {}
