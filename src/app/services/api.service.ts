import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUser(userId: number) {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }

  getUserPosts(userId: number) {
    return this.http.get<Post[]>(`${this.baseUrl}/users/${userId}/posts`);
  }
}