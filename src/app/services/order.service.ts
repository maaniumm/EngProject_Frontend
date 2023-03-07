import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CustomResponse} from "../models/CustomResponse";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Order} from "../models/Order";



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

  postViewOrder(organizationId : number, order:Order): Observable<any> {
    const params = new HttpParams().append('organizationId', organizationId);

    return this.http.post(`http://localhost:8080/api/v1/Order/view/pdf/generate`,order,{params : params,observe:'response',responseType:'blob'});
  }
  createOrder (organizationId : number, order:Order): Observable<CustomResponse>{
    const params = new HttpParams().append('organizationId', organizationId);
    return this.http.post<CustomResponse>(`http://localhost:8080/api/v1/Order/addOrder`,order,{params : params});
  }




}
