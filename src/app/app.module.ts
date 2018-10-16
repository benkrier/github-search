import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FollowersSearchComponent } from './followers-search/followers-search.component';
import { FollowerDetailComponent } from './follower-detail/follower-detail.component';
import { FollowersListComponent } from './followers-list/followers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersSearchComponent,
    FollowerDetailComponent,
    FollowersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
