import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "../models/user-profile.model";
import {Observable} from "rxjs";
import {AppliedAttempt} from "../models/applied-attempt.model";
import {CreatedAttempt} from "../models/created-attempt.model";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient ) { }
  getUserDetails(): Observable<UserProfile> {
    return this.http.get<UserProfile>('/api/v1/appUser/getMyUserDetails');
  }
  getAppliedAttempt(): Observable<AppliedAttempt> {
    return this.http.get<AppliedAttempt>('/api/v1/attempt/getAllAppliedAttempt');
  }

  getCreatedAttempt(): Observable<CreatedAttempt> {
    return this.http.get<CreatedAttempt>('/api/v1/attempt/getAllMyCreatedAttempt');
  }





}
