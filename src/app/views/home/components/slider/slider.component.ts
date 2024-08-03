import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() public homePage: any;
  currentLang: string;
  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getCurrentLang();
  }

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
