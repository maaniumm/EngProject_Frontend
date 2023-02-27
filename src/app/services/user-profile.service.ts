import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "../models/user-profile.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient ) { }
  getUserDetails(): Observable<UserProfile> {
    return this.http.get<UserProfile>('/api/v1/appUser/getMyUserDetails');
  }
}
