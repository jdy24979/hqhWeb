import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-goods-in',
  templateUrl: './goods-in.component.html',
  styleUrls: ['./goods-in.component.css']
})
export class GoodsInComponent implements OnInit {

  data=[];
  query;
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.query = {
      productName: "",
      modelName: "",
      specName:"",
      order: ""
    }
    this.getData();
  }

  getData(){
    this.http.post('./api/storehouse/goodsInList',this.query).subscribe(res => {
      this.data = res['list'];
    });
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
