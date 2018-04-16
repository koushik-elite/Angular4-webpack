import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Angulartics2Module, Angulartics2On } from 'angulartics2';
import { NgxCarouselModule } from 'ngx-carousel';

export const routerConfig = [
  {
      path:'',
      component : HomeComponent,
      data: {
        breadcrumb: "Home page"
      },
  },
];

@NgModule({
  declarations: [    
    HomeComponent
  ],
  imports: [
    CommonModule, SharedModule, Angulartics2Module, NgxCarouselModule, RouterModule.forChild(routerConfig)
  ],
})
export class HomeModule { }
 