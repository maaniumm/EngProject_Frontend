import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomResponse} from "../models/CustomResponse";

@Injectable({
  providedIn: 'root'
})
export class AttemptService {

  constructor(private http: HttpClient) { }



  getAllScoutInstructorRankAvailableForAppUserAttempt(emailScout:string): Observable<CustomResponse>{

    const params = new HttpParams().append('emailScout', emailScout);
    return this.http.get<CustomResponse>('http://localhost:8080/api/v1/attempt/allScoutInstructorRankAvailableForAppUserAttempt',{params:params});

  }







}
