import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestiService {

  constructor(private readonly http:HttpClient) { }

  public getTesti():Observable<any>{
    return this.http.get("http://localhost:9494/testinomial/get-all-testinomials")
  }
}
