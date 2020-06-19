import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MS19062020Service} from './services/ms-19-06-2020.service';
import { MSForumComponent } from './ms-forum/ms-forum.component';
import { MSForumItemComponent } from './ms-forum-item/ms-forum-item.component';
import { MSForumDetailsComponent } from './ms-forum-details/ms-forum-details.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MSForumComponent,
    MSForumItemComponent,
    MSForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MS19062020Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
