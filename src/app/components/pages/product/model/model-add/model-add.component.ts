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
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {
  validateForm:FormGroup;
  putValidateForm:FormGroup;

  query: {
    name: String;
    order: String;
  };

  data;
  addInfo;

  constructor(private _message: NzMessageService, private http: HttpClient,private fb: FormBuilder,private modalService: NzModalService,private sortService: SortDataService) {
    this.data = [];
    this.query = {
      name: "",
      order: null
    }
    this.addInfo = {
      productName: "",
      productOrder: "",
      productId:"",
      modelName:"",
      modelOrder:""
    }
  }
  resetForm() {
    this.query = {
      name: "",
      order: null
    }
  }
  getData() {
    this.http.post('./api/product/productList', this.query)
      .subscribe(res => {
        this.data = this.sortService.sort(res['list']);
      });
  }

  ngOnInit() {
    this.getData();
    this.validateForm = this.fb.group({
      productName: [ null, [ Validators.required ] ],
      productOrder: [ null, [ Validators.required ] ],
      modelName: [ null, [ Validators.required ] ],
      modelOrder: [ null, [ Validators.required ] ]
    });
  }

  
  // 模态框相关
  isVisible = false;
  isConfirmLoading = false;

  addClick (data){
    this.addInfo.productName = data.name;
    this.addInfo.productId = data.id;
    this.addInfo.productOrder = data.order;
    this.isVisible = true;
  }

  showModal = () => {
    this.isVisible = true;
  };
  handleOk = (e) => {
    this.isConfirmLoading = true;
    this.http.post('./api/model/modelAdd', this.addInfo)
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
