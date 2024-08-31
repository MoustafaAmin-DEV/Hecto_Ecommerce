import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageService } from './language/language.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  lang: string;
  urlApi = 'http://localhost:3000/';
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    this.lang = this.languageService.getCurrentLang();
  }

  datahomePage() {
    this.urlApi = `${this.urlApi}${this.lang}`;
    console.log('Request URL:', this.urlApi);
    return this.http.get<any>(this.urlApi).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }
}
