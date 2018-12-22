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

  options = [];
  ngOnInit() {
    this.query = {
      order: "",
      productId:"",
      modelId:"",
      specId:""
    }
    this.getProduct();
    this.data = [];
    this.getData();
  }

  products=[];
  getProduct(){
    this.http.get("./api/product/productSelect").subscribe(res => {
      this.products = res['list']
    })
  }
  models=[];
  getModel(){
    this.http.post("./api/model/modelSelect",{
      productId:this.query.productId
    }).subscribe(res => {
      this.models = res['list']
    })
  }

  getData(){
    this.http.post('./api/storehouse/list',this.query).subscribe(res => {
      this.data = res['list']
    })
  }

  resetForm() {
    this.query = {
      order: "",
      productId:"",
      modelId:"",
      specId:""
    }
  }

}
