import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss'],
})
export class TrendingProductsComponent {
  @Input() public homePage: any;
  // @Input() public homeAmont: any;
  // @Input() public homeTrendList: any;

  lang: string;
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    this.lang = this.languageService.getCurrentLang();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  section() {
    return console.log(this.homePage);
  }
}
