import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../services/menu-data.service';
import { AddressService } from '../../services/address.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  menu;
  
  constructor(private http: HttpClient,public menuDataService:MenuDataService,public addressService:AddressService) {
    this.menu = menuDataService.menu;
  }

  ngOnInit() {
    this.addressService.initAddress(this.menu);
  }
  openChange(id){
    this.addressService.setMenu(id);
  }
}
