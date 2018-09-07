import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeModule } from '../home/home.module';
import { UserModule } from '../user/user.module';
import { CoreModule } from '../core/core.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { NewsModule } from '../news/news.module';



const routes:Routes=[
  {
    path:"",
    redirectTo:'/home',
    pathMatch:'full'
    },
    
  {
  path:'home',
  loadChildren:'app/home/home.module#HomeModule',
  },
  {
    path:'news',
    loadChildren:'app/news/news.module#NewsModule',
    },
    {
      path:'user',
      loadChildren:'app/user/user.module#UserModule',
      },
     
  {
  path:'**',
  component:PageNotFoundComponent
  },
  
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    UserModule,
    HomeModule,
    NewsModule,
    CoreModule,

  ],
  declarations: [RoutingComponent,PageNotFoundComponent],
  exports:[RoutingComponent]
})
export class RoutingModule { }
