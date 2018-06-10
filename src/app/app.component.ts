import { Component } from '@angular/core';
import { MenuDataService } from './services/menu-data.service';
import { AddressService } from './services/address.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  isLoading:boolean = true;

  constructor() {
  }
}
