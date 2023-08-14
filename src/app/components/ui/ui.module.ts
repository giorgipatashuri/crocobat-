import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from './button/button.component';
import { RoutingService } from 'src/app/services/routing.service';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule
  ],
  providers:[RoutingService],
  exports:[ButtonComponent]
})
export class UiModule { }
