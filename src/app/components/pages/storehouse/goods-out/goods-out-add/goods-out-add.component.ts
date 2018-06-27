import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators 
} from '@angular/forms';
import { SortDataService } from '../../../../../services/sort-data.service';

@Component({
  selector: 'app-goods-out-add',
  templateUrl: './goods-out-add.component.html',
  styleUrls: ['./goods-out-add.component.css']
})
export class GoodsOutAddComponent implements OnInit {
  validateForm:FormGroup;
  putValidateForm:FormGroup;

  query: {
    productName: String;
    modelName: String;
    specName :String;
    order: String;
  };

  data;
  addInfo;

  constructor(private _message: NzMessageService, private http: HttpClient,private fb: FormBuilder,private modalService: NzModalService,private sortService: SortDataService) {
    this.data = [];
    this.query = {
      productName: "",
      modelName: "",
      specName:"",
      order: ""
    }
    this.addInfo = {
      productName: "",
      modelName:"",
      specName:"",
      specId:"",
      order:"",
      number:"",
      updateDate: + new Date()
    }
  }
  resetForm() {
    this.query = {
      productName: "",
      modelName: "",
      specName:"",
      order: ""
    }
  }
  getData() {
    this.http.post('./api/storehouse/list', this.query)
      .subscribe(res => {
        this.data = this.sortService.sort(res['list']);
      });
  }

  ngOnInit() {
    this.getData();
    this.validateForm = this.fb.group({
      number: [ null, [ Validators.required ] ]
    });
  }

  
  // 模态框相关
  isVisible = false;
  isConfirmLoading = false;

  addClick (data){
    this.addInfo.productName = data.product_name;
    this.addInfo.modelName = data.model_name;
    this.addInfo.specName = data.spec_name;
    this.addInfo.specId = data.spec_id;
    this.addInfo.id = data.id;
    this.addInfo.order = data.order;
    this.isVisible = true;
  }

  showModal = () => {
    this.isVisible = true;
  };
  handleOk = (e) => {
    this.isConfirmLoading = true;
    this.http.post('./api/storehouse/goodsOutAdd', this.addInfo)
      .subscribe(res => {
        if (res['code'] == 0) {
          this.createMessage('success', '新增成功');
          document.getElementById("goBack").click();
        } else {
          this.isConfirmLoading = false;
          this.createMessage('error', '系统异常');
        }
      })
  };

  createMessage = (type, msg) => {
    this._message.create(type, msg);
  };

  handleCancel = (e) => {
    this.isVisible = false;
  };

}
