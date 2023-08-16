import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  constructor(private routing:ActivatedRoute){}
  userPosts:Post[]|undefined
  ngOnInit() {
    this.routing.data.subscribe(data => {
      this.userPosts = data['userPosts']
    });
    console.log(this.userPosts)
  }
  
}
