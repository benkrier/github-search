import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FollowerDetailComponent } from './follower-detail/follower-detail.component';
import { FollowersSearchComponent } from './followers-search/followers-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/followers', pathMatch: 'full' },
  { path: 'followers', component: FollowersSearchComponent },
  { path: 'detail/:login', component: FollowerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
