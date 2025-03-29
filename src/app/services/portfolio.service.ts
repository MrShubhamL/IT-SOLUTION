import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private readonly http:HttpClient) { }

  public getProject():Observable<any>{
    return this.http.get("http://localhost:9494/project/get-all-projects")
  }
}
