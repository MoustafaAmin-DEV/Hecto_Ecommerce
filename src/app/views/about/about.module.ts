import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { OurEcommerceComponent } from './components/our-ecommerce/our-ecommerce.component';
import { OurFeaturesComponent } from './components/our-features/our-features.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    OurClientComponent,
    OurEcommerceComponent,
    OurFeaturesComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
