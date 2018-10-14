import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'app-followers-search',
  templateUrl: './followers-search.component.html',
  styleUrls: ['./followers-search.component.scss']
})
export class FollowersSearchComponent implements OnInit {
  login: string;
  id: number;
  results: any;
  follower: any;
  error_text: string = '';

  constructor(private followersService: FollowersService) {}

  ngOnInit() {}

  search(login: string): void {
    this.error_text = '';
    if (login) {
      this.login = login;
      this.followersService.getFollowers(login).subscribe(
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
