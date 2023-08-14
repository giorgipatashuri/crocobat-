import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private routing:RoutingService){}


  goHome(){
    return this.routing.navigateToHomePage()
  }

  goBack(){
    return this.routing.navigateToPreviousPage()
  }


 
}
