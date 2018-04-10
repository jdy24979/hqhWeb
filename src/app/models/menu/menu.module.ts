import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MenuModule {
   name:string;
   id:string;
   nameEn:string;
   icon:string;
   subList:{
     name:string;
     id:string;
     nameEn:string;
   }[]
 }
