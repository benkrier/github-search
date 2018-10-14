import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'app-followers-search',
  templateUrl: './followers-search.component.html',
  styleUrls: ['./followers-search.component.scss']
})
export class FollowersSearchComponent implements OnInit {
  login: string;
  results: any;
  follower: any;
  page: number = 1;
  error_text: string = '';

  constructor(private followersService: FollowersService) {}

  ngOnInit() {}

  search(login: string): void {
    console.log(this.page);
    this.error_text = '';
    if (login) {
      this.login = login;
      this.followersService.getFollowers(login, this.page).subscribe(
        data => {
          this.results = data;
        },
        error => {
          this.results = [];
          this.error_text = 'Sorry! No followers found. Try again';
          console.error(error);
        }
      );
    }
  }

  searchNext(login: string): void {
    this.page = this.page + 1;
    console.log(this.page);
    if (login) {
      this.login = login;
      this.followersService.getFollowers(login, this.page).subscribe(
        data => {
          this.results = data;
        },
        error => {
          this.results = [];
          this.error_text = 'Sorry! No followers found. Try again';
          console.error(error);
        }
      );
    }
  }
  searchPrevious(login: string): void {
    if (this.page > 0) {
      this.page = this.page - 1;
      console.log(this.page);
      this.login = login;
      this.followersService.getFollowers(login, this.page).subscribe(
        data => {
          this.results = data;
        },
        error => {
          this.results = [];
          this.error_text = 'Sorry! No followers found. Try again';
          console.error(error);
        }
      );
    }
  }
}
