import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../Shared/shared.module';
import { InfoAboutComponent } from './components/info-about/info-about.component';
import { ContactWayComponent } from './components/contact-way/contact-way.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

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
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
  ],
})
export class ContactModule {}
