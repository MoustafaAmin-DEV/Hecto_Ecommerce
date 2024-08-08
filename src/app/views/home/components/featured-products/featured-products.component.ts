import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  @Input() public homePage: any;
  currentLang: string;

  customOptions!: OwlOptions;
  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getCurrentLang();
  }

  ngOnInit(): void {
    this.setOwlOptions(this.currentLang);

    // Subscribe to language changes
    this.languageService.languageChanged.subscribe((language: string) => {
      this.setOwlOptions(language);
    });
  }
  setOwlOptions(language: string): void {
    this.customOptions = {
      loop: true,
      dots: true,
      margin: 20,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      rtl: language === 'ar',
      dotsEach: true,
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
      nav: false,
    };
  }
  featPro: any;
}
