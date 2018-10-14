import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://api.github.com/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  constructor(private http: HttpClient) {}

  getFollowers(login: string, page: number) {
    return this.http.get(
      `${BASE_URL}${login}/followers?per_page=5&page=${page}`
    );
  }

  getFollowerDetails(login: string) {
    return this.http.get(`${BASE_URL}${login}`);
  }
}
