import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-discount-item',
  templateUrl: './discount-item.component.html',
  styleUrls: ['./discount-item.component.scss'],
})
export class DiscountItemComponent implements OnInit {
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
      margin: 0,
      dots: true,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      rtl: language === 'ar',
      responsive: {
        0: {
          items: 1,
        },
      },
      nav: false,
    };
  }
}
