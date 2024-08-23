import { Component } from '@angular/core';
import { SharedService } from '../../Shared/services/shared.service';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public datahomePage: any;
  lang: string;
  constructor(
    public apiService: SharedService,
    private languageService: LanguageService
  ) {
    this.lang = this.languageService.getCurrentLang();
  }

  ngOnInit() {
    this.apiService.datahomePage().subscribe((data) => {
      console.log(data);
      this.datahomePage = data;
    });
  }
}
