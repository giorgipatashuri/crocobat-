import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UserDetailsComponent } from './screens/user-details/user-details.component';
import { UserDetailsResolver } from './screens/user-details/user-details.resolver';
import { UserPostsComponent } from './screens/user-posts/user-posts.component';
import { UserPostsResolver } from './screens/user-posts/user-posts.resolver';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
  },
  { 
    path:"user/:id",
    component:UserDetailsComponent,
    resolve: {
      user: UserDetailsResolver 
    }
  },
  {
    path:"users/:id/posts",
    component:UserPostsComponent,
    resolve:{
      userPosts:UserPostsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
