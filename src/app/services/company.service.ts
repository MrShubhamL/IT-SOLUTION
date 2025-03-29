import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private readonly http:HttpClient) { }

  public getCompany():Observable<any>{
    return this.http.get("http://localhost:9494/company/get-all-company")
  }
}
