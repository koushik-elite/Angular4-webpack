import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';
import { angulartics2DTM } from '../adobedtm/angulartics2-dtm';

@NgModule({
  imports: [
    CommonModule,
    Angulartics2Module.forRoot([angulartics2DTM]),
  ],
  providers: [ ],
  declarations: [ ]
})
export class SharedModule { }
