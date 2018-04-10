import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit {

  data:object[];
  constructor() { 
    this.data = [
      {
        productName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      },{
        productName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      },{
        productName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      },{
        productName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      },{
        productName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      },{
        productName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      }
    ]
  }

  ngOnInit() {
  }

}
