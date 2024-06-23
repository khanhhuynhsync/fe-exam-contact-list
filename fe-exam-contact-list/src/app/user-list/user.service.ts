import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://dummyjson.com/users'; // Example API

  constructor(private http: HttpClient) { }

  fetchUsers(query?: string): Observable<any> {
    let url = this.apiUrl;
    if (query) {
      url += `/search?q=${query}`;
    }
    return this.http.get<any>(url);
  }
}
