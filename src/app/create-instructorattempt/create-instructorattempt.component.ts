import { Component, OnInit } from '@angular/core';
import {AttemptService} from "../services/attempt.service";
import {Router} from "@angular/router";
import {ScoutInstructorRank} from "../models/ScoutInstructorRank";
import {CustomResponse} from "../models/CustomResponse";
import {Attempt} from "../models/Attempt";

@Component({
  selector: 'app-create-instructorattempt',
  templateUrl: './create-instructorattempt.component.html',
  styleUrls: ['./create-instructorattempt.component.css']
})
export class CreateInstructorattemptComponent implements OnInit {

  public newAttempt:Attempt=new Attempt();
  public staticEmail:string="ala3@gmail.com";
  public availableScoutInstructorRank:ScoutInstructorRank[]=[];

  constructor( public attemptService:AttemptService,private router: Router) {

  attemptService.getAllScoutInstructorRankAvailableForAppUserAttempt(this.staticEmail).subscribe((customRespoce:CustomResponse)=>{
    this.availableScoutInstructorRank=customRespoce.data.getAllScoutRankAvailableForAppUserAttempt;
    console.log(this.availableScoutInstructorRank)
  })
  }

  ngOnInit(): void {
  }
  public getAllScoutInstructorRankAvailableForAppUserAttempt():ScoutInstructorRank[]{
    return this.availableScoutInstructorRank;
  }

}
