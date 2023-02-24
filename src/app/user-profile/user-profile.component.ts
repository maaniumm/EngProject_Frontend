import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "../models/user-profile.model";
import {UserProfileService} from "../services/user-profile.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userProfileService: UserProfileService
  ) { }
  userDetails?: UserProfile;

  ngOnInit(): void {
    this.userProfileService.getUserDetails().subscribe(res => {
      if (res) {
        this.userDetails = res;

        console.log(res);
      } else {
        alert ("Failed to query list")
      }
    })
  }

}
