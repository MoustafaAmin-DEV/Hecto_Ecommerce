import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageCompaniesComponent } from '../Shared/components/image-companies/image-companies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [ImageCompaniesComponent, FilterPipe, SortPipe],
  imports: [
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [ImageCompaniesComponent, FilterPipe, SortPipe],
})
export class SharedModule {}
