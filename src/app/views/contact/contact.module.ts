import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { InfoAboutComponent } from './components/info-about/info-about.component';
import { ContactWayComponent } from './components/contact-way/contact-way.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent,
    InfoAboutComponent,
    ContactWayComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ContactModule {}
