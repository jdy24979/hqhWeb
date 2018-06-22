import { Injectable } from '@angular/core';

@Injectable()
export class SortDataService {

  constructor() { }
  
  sort(data){
    return data.sort(function(a,b){
      let orderA = a.order.split("");
      let orderB = b.order.split("");
      let $length = orderA.length;
      for (let i = 0; i < $length; i++) {
        if(orderA[i].charCodeAt() != orderB[i].charCodeAt()){
         return  orderA[i].charCodeAt() > orderB[i].charCodeAt() ? 1 : -1 ;
        }else{
          continue;
        }
      }
      return 0
    })
  }


}
