import { Injectable } from '@angular/core';
import { MenuModule } from '../models/menu/menu.module';

@Injectable()
export class MenuDataService {

  menu: MenuModule[];
  constructor() {
    this.menu = [
      {
        name: "库存管理",
        id: "100000000",
        nameEn:"storehouse",
        icon: "anticon-home",
        subList: [{
          name: "库存清单",
          nameEn:"goodList",
          id: "100000000"
        },
        {
          name: "入库",
          id: "100000001",
          nameEn:"goodIn"
        },
        {
          name: "出库",
          id: "100000002",
          nameEn:"goodOut"
        },
        {
          name: "材质单",
          id: "100000003",
          nameEn:"sheet"
        }
        ]
      },
      {
        name: "价格维护",
        id: "100000001",
        nameEn:"price",
        icon: "anticon-bank",
        subList: [{
          name: "价格清单",
          id: "100000004",
          nameEn:"list"
        },
        {
          name: "价格维护",
          id: "100000005",
          nameEn:"option"
        },
        {
          name: "历史价格",
          id: "100000006",
          nameEn:"history"
        }]
      },
      {
        name: "报表中心",
        id: "100000002",
        nameEn:"storehouse",
        icon: "anticon-folder",
        subList: [{
          name: "库存报表",
          id: "100000007",
          nameEn:"goodList"
        },
        {
          name: "入库报表",
          id: "100000008",
          nameEn:"goodList"
        },
        {
          name: "出库报表",
          id: "100000009",
          nameEn:"goodList"
        }]
      },
      {
        name: "系统",
        id: "100000003",
        nameEn:"system",
        icon: "anticon-desktop",
        subList: [{
          name: "用户",
          id: "100000010",
          nameEn:"users"
        },
        {
          name: "角色",
          id: "100000011",
          nameEn:"role"
        },
        {
          name: "数据字典",
          id: "100000012",
          nameEn:"dictionary"
        }]
      }
    ]
  }
  getMenu() {
    return this.menu;
  }
}
