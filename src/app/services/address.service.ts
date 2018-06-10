import { Injectable } from '@angular/core';
import { AddressModule } from '../models/address/address.module';

@Injectable()
export class AddressService {

  menuData;
  curMenuId:string;
  curSubMenuId:string;
  curAddress:AddressModule;

  constructor() { 
    
  }

  initAddress(menuData){
    console.log(menuData)
    this.curAddress = new AddressModule;
    this.menuData = menuData;
    this.curAddress.menu = this.menuData[0];
    this.curMenuId = this.menuData[0].id;
    this.curAddress.subMenu = this.menuData[0].subList[0];
    this.curSubMenuId = this.menuData[0].subList[0].id;
  }

  setSubMenu(subId){
    this.curSubMenuId = subId;
    for(let i in this.menuData){
      if(this.menuData[i].id == this.curMenuId){
        let subList = this.menuData[i].subList
        for(let j in subList){
          if(subList[j].id == this.curSubMenuId){
            this.curAddress.subMenu = subList[j]
            return ;
          }
        }
      }
    }
  }
  setMenu(MenuId){
    this.curMenuId = MenuId;
    for(let i in this.menuData){
      if(this.menuData[i].id == this.curMenuId){
          this.curAddress.menu = {
            name:this.menuData[i].name,
            id:this.menuData[i].id
          };
          this.curAddress.subMenu = this.menuData[i].subList[0];
          return ;
        }
      }
  }

  getCurAddress(){
    return this.curAddress;
  }
}
