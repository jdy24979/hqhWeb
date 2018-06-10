import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuDataService {

  menu = [
    { 
      "id": 1000000000, 
      "name": "库存管理", 
      "nameEn": "storehouse", 
      "icon": "anticon-home", 
      "subList": [
        { 
          "name": "库存清单", 
          "id": "01000000000", 
          "nameEn": "goodsList" 
        }, { 
          "name": "入库", 
          "id": "01000000001", 
          "nameEn": "goodsIn" 
        }, { 
          "name": "出库", 
          "id": "01000000002", 
          "nameEn": "goodsOut" 
        }
      ] 
    }, { 
      "id": 1000000002, 
      "name": "账单维护", 
      "nameEn": "bill", 
      "icon": "anticon-form", 
      "subList": [
        { 
          "name": "账单列表", 
          "id": "01000000003", 
          "nameEn": "billTotal" 
        }
      ] 
    }
  ];
  constructor(private http: HttpClient) {
  }


  getMenu() {
    return this.menu;
  }
}
