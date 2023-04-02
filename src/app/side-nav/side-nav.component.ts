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

    authenticationGuard.checkIfUserIsOwnerOfAnyOrganization();
  }

  ngOnInit(): void {
  }

  checkIfUserIsLogIn():boolean{
   return  this.authenticationGuard.checkIfUserIsLogon();
  }

}
