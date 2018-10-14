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

  getFollowers(login: string) {
    console.log(`${BASE_URL}${login}/followers`);
    console.log(this.http.get(`${BASE_URL}${login}/followers`));
    return this.http.get(`${BASE_URL}${login}/followers?per_page=100`);
  }

  getFollowerDetails(login: string) {
    console.log(`${BASE_URL}${login}`);
    return this.http.get(`${BASE_URL}${login}`);
  }
}
