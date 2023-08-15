import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/interfaces/user.interface";
import { ApiService } from "src/app/services/api.service";

@Injectable({
    providedIn: 'root'
  })
  export class UserDetailsResolver implements Resolve<User> {
    constructor(private api: ApiService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const userId = route.params['id'];
      return this.api.getUser(userId);
    }
  }