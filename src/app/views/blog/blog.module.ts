import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogsRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogsRoutingModule],
})
export class BlogModule {}
