import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './services/auth.guard';
import { NewsService } from './services/news.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,   
    BrowserAnimationsModule, 
  ],
  providers: [AuthService,NewsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
