import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/interfaces/post.interface';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserPostsResolver implements Resolve<Post[]> {
  constructor(private api:ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    const userId = route.params['id'];
    return this.api.getUserPosts(userId);
  }
}