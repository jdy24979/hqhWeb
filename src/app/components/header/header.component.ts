import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:String;

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
  }

  logout () {
    location.href = "./login";
  }

}
