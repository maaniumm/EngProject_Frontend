import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('/api/v1/appUser/getMyUserDetails').subscribe(res => {
      if (res) {
        console.log('List', res);
      } else {
        alert ("Failed to query list")
      }
    })
  }

  signOut(): void{
    window.localStorage.clear();
    this.router.navigate(['']);
  }

}
