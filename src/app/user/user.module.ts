import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AuthGuard } from '../services/auth.guard';
import { NewsService } from '../services/news.service';


const routes:Routes=[

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
{path:'userdetail',component:UserdetailComponent,canActivate:[AuthGuard]}]

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
 
  ],
  declarations: [LoginComponent,RegisterComponent, UserdetailComponent],
  exports:[],
  providers:[AuthService,NewsService,AuthGuard]
})
export class UserModule { }
