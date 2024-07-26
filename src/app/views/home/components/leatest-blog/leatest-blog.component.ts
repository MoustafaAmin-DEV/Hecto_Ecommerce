import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leatest-blog',
  templateUrl: './leatest-blog.component.html',
  styleUrls: ['./leatest-blog.component.scss'],
})
export class LeatestBlogComponent {
  @Input() public home: any;
}
