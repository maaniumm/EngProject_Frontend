import { Component, OnInit } from '@angular/core';
import {AuthenticationGuard} from "../authentication.guard";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  collapsed:boolean = true;

  constructor(private authenticationGuard:AuthenticationGuard) {


  }

  ngOnInit(): void {
  }

  checkIfUserIsLogIn():boolean{
   return  this.authenticationGuard.checkIfUserIsLogon();
  }

  checkIfUserHasOwnerPermission():boolean{
    return this.authenticationGuard.checkIfUserIsOwnerOfAnyOrganization();
  }


  checkIfUserHasAdminPermission():boolean{
    return this.authenticationGuard.checkIfUserIsAdmin();
  }

}
