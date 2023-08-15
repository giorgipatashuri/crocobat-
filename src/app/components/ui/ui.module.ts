import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { RoutingService } from 'src/app/services/routing.service';
import { CirclesComponent } from './circles/circles.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [ButtonComponent,CirclesComponent, CardComponent ],
  imports: [
    CommonModule
  ],
  providers:[RoutingService],
  exports:[ButtonComponent,CirclesComponent,CardComponent]
})
export class UiModule { }
