import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {SwiperModule} from 'swiper/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CardMenuComponentModule } from './card-menu/card-menu.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CardMenuComponentModule,
    Tab2PageRoutingModule,
    SwiperModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
