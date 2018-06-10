import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-goods-in',
  templateUrl: './goods-in.component.html',
  styleUrls: ['./goods-in.component.css']
})
export class GoodsInComponent implements OnInit {

  data;
  constructor(private http: HttpClient) { 
    
    this.data = [
      {
        ProductName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        TPrice:"4310",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      }
    ]
  }

  ngOnInit() {
    this.http.post('localhost:8080/api/getGoodsIn',{
      name:'jdy'
    }).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

}
