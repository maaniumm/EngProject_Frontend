import { Component, OnInit } from '@angular/core';
import {AppUserService} from "../services/app-user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomResponse} from "../models/CustomResponse";
import {AppUserProfileDetails} from "../models/AppUserProfileDetails";
import {ScoutRank} from "../models/ScoutRank";
import {ScoutInstructorRank} from "../models/ScoutInstructorRank";
import {AttemptService} from "../services/attempt.service";

@Component({
  selector: 'app-manage-scout-profile',
  templateUrl: './manage-scout-profile.component.html',
  styleUrls: ['./manage-scout-profile.component.css']
})
export class ManageScoutProfileComponent implements OnInit {

  public userEmail:string="";
  public appUserProfileDetails:AppUserProfileDetails=new AppUserProfileDetails();

  public scoutRanks:ScoutRank[]=[];
  public scoutInstructorRanks:ScoutInstructorRank[]=[];




  constructor( public appUserService:AppUserService,public attemptService:AttemptService,private  route:ActivatedRoute) {

    this.route.paramMap.subscribe((params:ParamMap)=> {


      this.userEmail =params.get('email')!;

      appUserService.getUserProfailDetails(this.userEmail).subscribe((customResponse: CustomResponse) => {
      this.appUserProfileDetails=customResponse.data.getUserProfailDetails


        attemptService.getAllScoutRank().subscribe((customResponse: CustomResponse) =>{
          this.scoutRanks=customResponse.data.ScoutRanks
        })
        attemptService.getAllScoutInstructorRank().subscribe((customResponse: CustomResponse) =>{
          this.scoutInstructorRanks=customResponse.data.ScoutInstruktorRanks
        })



      })


    })
  }

  getScoutInstructorRanks(): ScoutInstructorRank[]{
    return this.scoutInstructorRanks
  }
  getScoutRanks(): ScoutRank[]{
    return this.scoutRanks
  }



  ngOnInit(): void {
  }
  onChangeOrganization(){
    console.log(this.appUserProfileDetails)
  }

}
