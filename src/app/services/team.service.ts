import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private readonly http:HttpClient) { }

  public getTeam():Observable<any>{
    return this.http.get("http://localhost:9494/team/get-all-teams")
  }
}
