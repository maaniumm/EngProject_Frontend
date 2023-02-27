import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CustomResponse} from "../models/CustomResponse";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class OrderService {



  constructor(private http: HttpClient) { }



  getAllActiveLines(organizationId : number): Observable<CustomResponse> {

    const params = new HttpParams().append('idOrganization', organizationId);

    return this.http.get<CustomResponse>(`http://localhost:8080/api/v1/organization/allActiveLines`,{params : params});
  }

  getOrganization(organizationId : number): Observable<CustomResponse> {

    const params = new HttpParams().append('idOrganization', organizationId);

    return this.http.get<CustomResponse>(`http://localhost:8080/api/v1/organization/getOrganization`,{params : params});
  }




}
