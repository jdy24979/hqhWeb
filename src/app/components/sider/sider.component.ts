import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../services/menu-data.service';
import { MenuModule } from '../../models/menu/menu.module';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  menu:MenuModule[];
  
  constructor(public menuDataService:MenuDataService,public addressService:AddressService) {
    this.menu = this.menuDataService.getMenu();
  }

  ngOnInit() {
  }
  openChange(id){
    this.addressService.setMenu(id);
  }
}
