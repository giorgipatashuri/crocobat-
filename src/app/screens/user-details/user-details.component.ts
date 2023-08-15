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
  constructor(private api:ApiService,private routing:ActivatedRoute){}
    userId:number| undefined
    user:User | undefined
    ngOnInit() {
      this.routing.data.subscribe(data => {
        this.user = data['user'];
      });
    }
}
