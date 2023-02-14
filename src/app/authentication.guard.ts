import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private jwtService: JwtHelperService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.jwtService.isTokenExpired());

      if (this.jwtService.isTokenExpired()){
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }

      /*if(state.url == "/login" || state.url =="/register"){
        return true;
      }

      let access_token = sessionStorage.getItem('access_token');

      if (!access_token){
        return this.router.parseUrl('/login');
      }

      return true;*/
  }

}
