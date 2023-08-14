import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }

  getUserPosts(userId: number): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/posts?userId=${userId}`);
  }
}