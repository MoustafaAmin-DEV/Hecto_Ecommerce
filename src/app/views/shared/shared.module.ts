import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageCompaniesComponent } from './components/image-companies/image-companies.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImageCompaniesComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [HeaderComponent, FooterComponent, ImageCompaniesComponent],
})
export class SharedModule {}
