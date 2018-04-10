import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AddressModule { 
  menu:{
    name:string;
    id:string;
  };
  subMenu:{
    name:string;
    id:string;
  }
}
