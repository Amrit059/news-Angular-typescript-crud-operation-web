import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, FooterComponent,],
  providers:[AuthService],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
