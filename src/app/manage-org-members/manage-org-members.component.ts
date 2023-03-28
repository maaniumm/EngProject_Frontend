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
  public appUserFromOrganization:AppUserDetails=new AppUserDetails();
  public roleName?:string="Harcerz";
  public roleNameList : String[]=["Przyboczny","Skarbnik","Harcerz"];
  public allAppUsersFromOrganization:AppUserDetails[]=[];
  public showErrorValidationModal = false;

  constructor(public organizationService:OrganizationService,private  route:ActivatedRoute,private router: Router) {

    this.route.paramMap.subscribe((params:ParamMap)=> {
      this.staticOrganization = parseInt(params.get('organizationId')!);

        this.addEvent();

    });
  }

  addEvent(){
    this.organizationService.getUsersFromOutSideOrganization(this.staticOrganization).subscribe((customRespoceUsers:CustomResponse)=>{
      this.allAppUsers=customRespoceUsers.data.getUsersFromOutSideOrganization
      this.allAppUsers.forEach(c =>{
        c.searchParam = c.name+" "+c.surname;
      })
      this.appUserDetails=new AppUserDetails();
    })
    this.organizationService.getAllUsersFromOrganizationWithOutYou(this.staticOrganization).subscribe((customRespoceUsersAll:CustomResponse)=>{
      this.allAppUsersFromOrganization=customRespoceUsersAll.data.getAllUsersFromOrganizationWithOutYou
    })
  }


  getAppAllAppUsers(){
    return this.allAppUsers
  }

  getRoleNameList(){
    return this.roleNameList
  }
  getallAppUsersFromOrganization(){
    return this.allAppUsersFromOrganization
  }

  ngOnInit(): void {
  }
  onChangeOrganization(){
  console.log(this.roleName)
  }


  addAppUserToOrganization(){

    if( this.appUserDetails===null || this.appUserDetails===undefined){
      this.showErrorValidationModal=true;
      return;
    }

    if( this.appUserDetails.email===undefined || this.appUserDetails.email===null){
      this.showErrorValidationModal=true;
      return;
    }

    this.organizationService.addAppUsetToOrganization(this.appUserDetails.email!,this.staticOrganization,this.roleName!).subscribe((customRespoce:CustomResponse)=>{
      this.addEvent()
    })
  }

  deleteUserFromOrganization(){
    this.organizationService.deleteUserFromOrganization(this.appUserFromOrganization.email!,this.staticOrganization).subscribe((customRespoce:CustomResponse)=>{
      this.addEvent()
    })
  }

  gotomanagescoutprofile(){
    this.router.navigate(['managescoutprofile',{email:this.appUserFromOrganization.email!}]);
  }


}
