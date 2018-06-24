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
  selector: 'app-spec-add',
  templateUrl: './spec-add.component.html',
  styleUrls: ['./spec-add.component.css']
})
export class SpecAddComponent implements OnInit {
  validateForm:FormGroup;
  putValidateForm:FormGroup;

  query: {
    productName: String;
    modelName: String;
    order: String;
  };

  data;
  addInfo;

  constructor(private _message: NzMessageService, private http: HttpClient,private fb: FormBuilder,private modalService: NzModalService,private sortService: SortDataService) {
    this.data = [];
    this.query= {
      productName: "",
      modelName: "",
      order: ""
    };
    this.addInfo = {
      productName: "",
      productOrder: "",
      productId:"",
      modelName:"",
      modelOrder:"",
      modelId:"",
      specName:"",
      specOrder:""
    }
  }
  resetForm() {
    this.query= {
      productName: "",
      modelName: "",
      order: ""
    };
  }
  getData() {
    this.http.post('./api/model/modelList', this.query)
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
      modelOrder: [ null, [ Validators.required ] ],
      specName: [null, [Validators.required]],
      specOrder: [null, [Validators.required]]
    });
  }

  
  // 模态框相关
  isVisible = false;
  isConfirmLoading = false;

  addClick (data){
    this.addInfo.productName = data.product_name;
    this.addInfo.productId = data.product_id;
    this.addInfo.productOrder = data.product_order;
    this.addInfo.modelId = data.id;
    this.addInfo.modelName = data.model_name;
    this.addInfo.modelOrder = data.model_order;
    this.isVisible = true;
  }

  showModal = () => {
    this.isVisible = true;
  };
  handleOk = (e) => {
    this.isConfirmLoading = true;
    this.http.post('./api/spec/specAdd', this.addInfo)
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
