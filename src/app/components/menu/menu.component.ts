import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { AddressModule } from '../../models/address/address.module';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input("menu") menu;

  curAddress: AddressModule;
  @Output() openChanged = new EventEmitter<string>();
  constructor(public addressService: AddressService) {
    this.curAddress = this.addressService.getCurAddress();
  }

  ngOnInit() {

  }

  subMenuClick(subMenu) {
    this.addressService.setSubMenu(subMenu)
  }
  openChange(id) {
    this.openChanged.emit(id);
  }

}
