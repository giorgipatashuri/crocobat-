import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private router:Router,private location: Location){}

  navigateToUserPosts(userId: number) {
    this.router.navigate(['users', userId, 'posts']);
  }

  navigateToUserDetail(userId:number){
    this.router.navigate(['/user', userId]);
  }
  navigateToHomePage(){
    this.router.navigate(['/']);
  }

  navigateToPreviousPage() {
    this.location.back()
  }
}
