import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from '../../Shared/services/shared.service';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private http: HttpClient) {}
}
