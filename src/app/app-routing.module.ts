import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component"
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationGuard} from "./authentication.guard";
import {ConfirmemailComponent} from "./confirmemail/confirmemail.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageProfileComponent} from "./manage-profile/manage-profile.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CreateOrgComponent} from "./create-org/create-org.component";

const routes: Routes = [
  {path: 'forgetpassword', component:ResetPasswordComponent},
  {path: 'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'confirm', component: ConfirmemailComponent},
  {path: 'changepassword', component: ChangePasswordComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'home' ,component:HomeComponent},
  {path: 'manageprofile' ,component:ManageProfileComponent},
  {path: 'userprofile' ,component:UserProfileComponent},
  {path: 'createorg' ,component:CreateOrgComponent},
  {path: '', canActivate:[AuthenticationGuard], children: [
  {path: '' ,component:HomeComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
