import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuDataService {

  menu = JSON.parse( sessionStorage.getItem('menu') );
  constructor(private http: HttpClient) {
  }


  getMenu() {
    return this.menu;
  }
}
