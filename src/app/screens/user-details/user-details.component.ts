import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  constructor(private actRouter:ActivatedRoute,private routing:RoutingService){}
    user:User | undefined

    ngOnInit() {
      this.actRouter.data.subscribe(data => {
        this.user = data['user'];
      });
    }
    goToUserPosts(){
      if(this.user) return this.routing.navigateToUserPosts(this.user.id)
    }
}
