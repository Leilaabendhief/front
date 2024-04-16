 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OfferModuleModule} from "../../Modules/offer-module/offer-module.module";


@Injectable({
  providedIn: 'root'
})
export class OfferServicesService {
  private baseUrl = 'http://localhost:8089/ForumManagement/offer';

  constructor(private http: HttpClient) { }

  getOffers(): Observable<OfferModuleModule[]> {
    return this.http.get<OfferModuleModule[]>(`${this.baseUrl}/retrieve-all-offers`);
  }

  getOffer(id: number): Observable<OfferModuleModule> {
    return this.http.get<OfferModuleModule>(`${this.baseUrl}/retrieve-offer/${id}`);
  }

  addOffer(offer: OfferModuleModule): Observable<OfferModuleModule> {
    return this.http.post<OfferModuleModule>(`${this.baseUrl}/add-offer`, offer);
  }

  removeOffer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove-offer/${id}`);
  }

  modifyOffer(offer: OfferModuleModule): Observable<OfferModuleModule> {
    return this.http.put<OfferModuleModule>(`${this.baseUrl}/modify-offer`, offer);
  }
  getMatchedOffersForUser(userId: number): Observable<OfferModuleModule[]> {
    return this.http.get<OfferModuleModule[]>(`${this.baseUrl}/match/${userId}`);
  }
}
