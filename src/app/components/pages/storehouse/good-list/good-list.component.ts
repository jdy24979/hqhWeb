import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit {

  data:object[];
  query;
  constructor(public http: HttpClient) { 
  }

  ngOnInit() {
    this.query = {
      productName: "",
      modelName: "",
      specName:"",
      order: ""
    }
    this.data = [];
    this.getData();
  }

  getData(){
    this.http.post('./api/storehouse/list',this.query).subscribe(res => {
      this.data = res['list']
    })
  }

  resetForm() {
    this.query = {
      productName: "",
      specName:"",
      modelName: "",
      order: ""
    }
  }

}
