import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { createComponent } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CatagoriesComponent } from './catagories/catagories.component';
import { DetailComponent } from './detail/detail.component';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth.guard';
import { NewsService } from '../services/news.service';
import { DeleteComponent } from './delete/delete.component';

const routes:Routes=[
  {path:'create',component:CreateComponent ,canActivate:[AuthGuard]},
  {path:'detail',component:DetailComponent,canActivate:[AuthGuard]},
  {path:'delete/:id',component:DeleteComponent,canActivate:[AuthGuard]},
  {path:'catagories/:catagories',component:CatagoriesComponent},
  {path:'update/:id',component:UpdateComponent,canActivate:[AuthGuard]},
  ]
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
  declarations: [CreateComponent, UpdateComponent, CatagoriesComponent, DetailComponent, DeleteComponent,],
  exports:[CreateComponent, UpdateComponent],
  providers:[AuthService,NewsService,AuthGuard]
})
export class NewsModule { }
