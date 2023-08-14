import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { RoutingService } from 'src/app/services/routing.service';
import { CirclesComponent } from './circles/circles.component';



@NgModule({
  declarations: [ButtonComponent,CirclesComponent ],
  imports: [
    CommonModule
  ],
  providers:[RoutingService],
  exports:[ButtonComponent,CirclesComponent]
})
export class UiModule { }
