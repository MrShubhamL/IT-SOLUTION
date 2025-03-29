import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private readonly http:HttpClient) { }

  public getBlog():Observable<any>{
    return this.http.get("http://localhost:9494/blog/get-all-blogs");
  }
}
