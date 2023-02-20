import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RestapiService} from "./restapi.service";
import {AppRoutingModule} from "./app-routing.module";
import {RequestInterceptor} from "./request.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import '@cds/core/icon/register.js';
import {ClarityIcons, userIcon, tasksIcon, cogIcon, infoCircleIcon} from '@cds/core/icon';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateOrgComponent } from './create-org/create-org.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateInstructorattemptComponent } from './create-instructorattempt/create-instructorattempt.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResetPasswordComponent,
    ConfirmemailComponent,
    ChangePasswordComponent,
    DashboardComponent,
    SideNavComponent,
    ManageProfileComponent,
    UserProfileComponent,
    CreateOrgComponent,
    CreateOrderComponent,
    CreateInstructorattemptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080']
      }
    }),
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
