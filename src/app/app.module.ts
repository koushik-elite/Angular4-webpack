import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Angulartics2Module, Angulartics2On } from 'angulartics2';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    Angulartics2Module,
    NgxCarouselModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
