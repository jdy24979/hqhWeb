import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-goods-out',
  templateUrl: './goods-out.component.html',
  styleUrls: ['./goods-out.component.css']
})
export class GoodsOutComponent implements OnInit {
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
    this.http.post('./api/storehouse/goodsOutList',this.query).subscribe(res => {
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
