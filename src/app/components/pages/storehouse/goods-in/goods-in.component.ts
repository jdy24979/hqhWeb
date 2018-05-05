import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-goods-in',
  templateUrl: './goods-in.component.html',
  styleUrls: ['./goods-in.component.css']
})
export class GoodsInComponent implements OnInit {

  data:object[];
  configUrl:"https://www.baidu.com/home/msg/data/personalcontent?callback=jQuery1102012762925483245668_1525265780475&num=8&_req_seqid=d70d967200009f5a&sid=1455_21119_26307_20930&_=1525265780476";
  constructor(private http: HttpClient) { 
    console.log(this.showConfig());

    

    

    this.data = [
      {
        ProductName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a",
        TPrice:"4520"
      }
    ]
  }
  showConfig() {
    console.log(1)
    return this.http.get(this.configUrl);
  }

  ngOnInit() {
  }

}
