import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomResponse} from "../models/CustomResponse";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private http: HttpClient) { }

  getMyProfileDetails(): Observable<CustomResponse>{
    return this.http.get<CustomResponse>('http://localhost:8080/api/v1/appUser/getMyUserDetails');
  }
  getAllUsersWithOutYou(): Observable<CustomResponse>{
    return this.http.get<CustomResponse>('http://localhost:8080/api/v1/appUser/getAllUsersWithOutYou');
  }



}
