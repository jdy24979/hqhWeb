import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  sheetData: Object[];
  constructor() {
    this.sheetData = [
      {
        id: 10000000001,
        name: '钢管',
        company: '安阳市新普钢铁有限公司',
        path: ['msheets/30.pdf', 'msheets/32.pdf'],
        remark: "000"
      }
    ]
  }

  ngOnInit() {
  }

}
