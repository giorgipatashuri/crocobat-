import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UiModule } from './components/ui/ui.module';
import { HomeComponent } from './screens/home/home.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './screens/user-details/user-details.component';
import { UserPostsComponent } from './screens/user-posts/user-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TableComponent,
    UserDetailsComponent,
    UserPostsComponent,
  ],
  imports: [
    UiModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
