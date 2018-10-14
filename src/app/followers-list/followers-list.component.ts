import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss']
})
export class FollowersListComponent implements OnInit {
  @Input()
  followers: any[];

  constructor() {}

  ngOnInit() {}
}
