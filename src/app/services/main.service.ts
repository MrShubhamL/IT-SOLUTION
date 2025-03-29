import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly http:HttpClient) { }

  //---------------------- Company_Service End-Point -------------//

  public getCompany():Observable<any>{
    return this.http.get("http://localhost:9494/company/get-all-company")
  }

  //---------------- Projects End Point----------------------//

  public getProject():Observable<any>{
    return this.http.get("http://localhost:9494/project/get-all-projects")
  }

  //--------------- Packages End-Point -------------------//

  public getPackage():Observable<any>{
    return this.http.get("http://localhost:9494/price/get-all-price")
  }

  //-------------- Testinomial End-Point -----------------//

  public getTesti():Observable<any>{
    return this.http.get("http://localhost:9494/testinomial/get-all-testinomials")
  }

  //--------------- Team End-Point -------------------------//

  public getTeam():Observable<any>{
    return this.http.get("http://localhost:9494/team/get-all-teams")
  }

  //--------------- Blog/News End-Point ---------------------//

  public getBlog():Observable<any>{
    return this.http.get("http://localhost:9494/blog/get-all-blogs")
  }

  //-------------- Carrer End-Point -----------------------//

  public getCarrer():Observable<any>{
    return this.http.get("http://localhost:9494/carrer/get-all-carrer")
  }











































































}
