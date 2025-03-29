import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrerService {

  constructor(private readonly http:HttpClient) { }

  public getCarrer():Observable<any>{
    return this.http.get("http://localhost:9494/carrer/get-all-carrer");
  }



  //------------------ User Job Application Form Submit End-Point ------------------------//

  public createStudent(user:FormData):Observable<any>{
    return this.http.post("http://localhost:9797/student/create-student-with-multipart",user);
  }



}
