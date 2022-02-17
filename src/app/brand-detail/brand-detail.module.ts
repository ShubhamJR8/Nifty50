import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandDetailPageRoutingModule } from './brand-detail-routing.module';

import { BrandDetailPage } from './brand-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandDetailPageRoutingModule
  ],
  declarations: [BrandDetailPage]
})
export class BrandDetailPageModule {}
