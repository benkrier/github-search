import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FollowersService } from '../followers.service';

@Component({
  selector: 'app-follower-detail',
  templateUrl: './follower-detail.component.html',
  styleUrls: ['./follower-detail.component.scss']
})
export class FollowerDetailComponent implements OnInit {
  error_text: string = '';
  @Input()
  follower: any;

  constructor(
    private route: ActivatedRoute,
    private followersService: FollowersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFollowerDetails();
  }
  getFollowerDetails(): void {
    const login = this.route.snapshot.paramMap.get('login');
    this.followersService.getFollowerDetails(login).subscribe(
      data => {
        this.follower = data;
      },
      error => {
        this.follower = {};
        this.error_text = 'Sorry! No follower details found. Try again';
        console.error(error);
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
}
