import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HomepageDataService {
  private newsApiUrl = environment.cmsApiUrl + '/news-and-articles?filters[country][$eq]=United%20Arab%20Emirates&sort[0]=date:desc';

  private visaTypesApiUrl =
    environment.cmsApiUrl + '/visa-types?populate[tabs][populate]=true';

  private holidaysApi =
    environment.cmsApiUrl +
    '/public-holidays?filters[country][$eq]=United%20Arab%20Emirates';

  private centersServiceApi = environment.cmsApiUrl + '/centers?filters[country][$eq]=United%20Arab%20Emirates&populate=*'

  visaTypeApi(slug: string) {
    return `${environment.cmsApiUrl}/visa-types?filters[slug][$eq]=${slug}&populate[tabs][populate]=true&locale[0]=en`;
  }

  newsArticleApi(slug: string) {
    return `${environment.cmsApiUrl}/news-and-articles?filters[slug][$eq]=${slug}&populate[tabs][populate]=true&locale[0]=en`;
  }

  headerApi() {
    return `${environment.cmsApiUrl}/header-links?filters[country][$eq]=United Arab Emirates&sort[0]=id:asc&populate[items][populate]=*&locale[0]=en`;
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

  getHolidays(): Observable<any> {
    return this.http.get<any>(this.holidaysApi);
  }

  getPageData(slug: string): Observable<any> {
    return this.http.get<any>(
      `${environment.cmsApiUrl}/pages?filters[slug]=${slug}`
    );
  }

  getPassportService(slug: string): Observable<any> {
    return this.http.get<any>(this.passportServiceApi(slug));
  }

  getAttestationService(slug: string): Observable<any> {
    return this.http.get<any>(this.attestationServiceApi(slug));
  }

  getCenterApi(): Observable<any> {
    return this.http.get<any>(this.centersServiceApi)
  }
}
