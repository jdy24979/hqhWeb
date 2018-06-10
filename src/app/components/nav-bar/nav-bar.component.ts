import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { AddressModule } from '../../models/address/address.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  curAddress:AddressModule;

  constructor(public addressService:AddressService) {
    
  }

  ngOnInit() {
    this.curAddress = this.addressService.getCurAddress();
  }

}
