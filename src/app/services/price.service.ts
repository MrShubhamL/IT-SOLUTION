import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private readonly http:HttpClient) { }

  public getPackage():Observable<any>{
    return this.http.get("http://localhost:9494/price/get-all-price")
  }
}
