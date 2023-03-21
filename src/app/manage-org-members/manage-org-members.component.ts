import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomResponse} from "../models/CustomResponse";
import {AppUserDetails} from "../models/AppUserDetails";

@Component({
  selector: 'app-manage-org-members',
  templateUrl: './manage-org-members.component.html',
  styleUrls: ['./manage-org-members.component.css']
})
export class ManageOrgMembersComponent implements OnInit {
  public staticOrganization=0;
  public allAppUsers:AppUserDetails[]=[];
  public appUserDetails:AppUserDetails=new AppUserDetails();

  constructor(public organizationService:OrganizationService,private  route:ActivatedRoute,private router: Router) {

    this.route.paramMap.subscribe((params:ParamMap)=> {
      this.staticOrganization = parseInt(params.get('organizationId')!);

      organizationService.getUsersFromOutSideOrganization(this.staticOrganization).subscribe((customRespoceUsers:CustomResponse)=>{
        this.allAppUsers=customRespoceUsers.data.getUsersFromOutSideOrganization
      })


    });
  }
  getAppAllAppUsers(){
    return this.allAppUsers
  }

  ngOnInit(): void {
  }

}
