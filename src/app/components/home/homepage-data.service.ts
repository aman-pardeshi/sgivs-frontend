import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HomepageDataService {
  private newsApiUrl = environment.cmsApiUrl + '/news-and-articles';

  private visaTypesApiUrl =
    environment.cmsApiUrl + '/visa-types?populate[tabs][populate]=true';

  private centersWithHolidaysApi =
    environment.cmsApiUrl +
    '/centers?populate[public_holidays_and_closures][populate]=true&locale[0]=en';

  visaTypeApi(slug: string) {
    return `${environment.cmsApiUrl}/visa-types?filters[slug][$eq]=${slug}&populate[tabs][populate]=true&locale[0]=en`;
  }

  newsArticleApi(slug: string) {
    return `${environment.cmsApiUrl}/news-and-articles?filters[slug][$eq]=${slug}&populate[tabs][populate]=true&locale[0]=en`;
  }

  headerApi() {
    return `${environment.cmsApiUrl}/header-links?populate[items][populate]=*&locale[0]=en`;
  }

  passportServiceApi(slug: string) {
    return `${environment.cmsApiUrl}/passport-services?filters[slug][$eq]=${slug}&populate[tabs][populate]=true`;
  }

  attestationServiceApi(slug: string) {
    return `${environment.cmsApiUrl}/attestation-services?filters[slug][$eq]=${slug}&populate[tabs][populate]=true`;
  }

  constructor(private http: HttpClient) {}

  getHeaderData(): Observable<any> {
    return this.http.get<any>(this.headerApi());
  }

  getNewsArticles(): Observable<any> {
    return this.http.get<any>(this.newsApiUrl);
  }

  getVisaTypes(): Observable<any> {
    return this.http.get<any>(this.visaTypesApiUrl);
  }

  getVisaType(slug: string): Observable<any> {
    return this.http.get<any>(this.visaTypeApi(slug));
  }

  getNewsArticle(slug: string): Observable<any> {
    return this.http.get<any>(this.newsArticleApi(slug));
  }

  getCentersWithHolidays(): Observable<any> {
    return this.http.get<any>(this.centersWithHolidaysApi);
  }

  getPageData(slug: string): Observable<any> {
    return this.http.get<any>(
      `${environment.cmsApiUrl}/landing-pages?filters[slug]=${slug}`
    );
  }

  getPassportService(slug: string): Observable<any> {
    return this.http.get<any>(this.passportServiceApi(slug));
  }

  getAttestationService(slug: string): Observable<any> {
    return this.http.get<any>(this.attestationServiceApi(slug));
  }
}
