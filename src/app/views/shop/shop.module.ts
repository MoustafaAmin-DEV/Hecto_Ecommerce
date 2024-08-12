import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class ShopModule {}
