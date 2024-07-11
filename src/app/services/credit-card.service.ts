import { CreditCard } from './../models/credit-card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../models/ServerResponse';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private url = "http://localhost:8080/ccAdmin";
  constructor(private _http: HttpClient) { }

    createCreditCard(creditCard: CreditCard): Observable<CreditCard>{
      const url =  `${this.url}/${'/create'}`; 
      console.log(url);
      return this._http.post<CreditCard>(url,creditCard);
    }

    getCreditCards(): Observable<ServerResponse>{
      const url = `${this.url}/${'getAllCards'}`;
      console.log(url);
      return this._http.get<ServerResponse>(url);
    }

    getCreditCardById(id: Number): Observable<CreditCard>{
      const url = `${this.url}/${id}`;
      console.log(url);
      return this._http.get<CreditCard>(url);
    }

     updateCreditCard(creditCard: CreditCard): Observable<CreditCard>{
      const url = `${this.url}/${creditCard.id}`;
      console.log(url);
      return this._http.put<CreditCard>(url,creditCard);
     }

     deleteCreditCard(id: Number): Observable<void>{
      const url= `${this.url}/${id}`;
      console.log(url);
      return this._http.delete<void>(url);
     }

  }



