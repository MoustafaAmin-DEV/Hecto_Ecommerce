import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() public home: any;

  constructor() {}

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  ngOnInit(): void {}
}
