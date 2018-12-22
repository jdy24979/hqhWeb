import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { SortDataService } from '../../../../services/sort-data.service';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {
  validateForm: FormGroup;
  putValidateForm: FormGroup;

  query: {
    productName: String;
    modelName: String;
    specName :String;
    order: String;
  };

  data;
  putInfo;

  constructor(private _message: NzMessageService, private http: HttpClient, private fb: FormBuilder, private modalService: NzModalService, private sortService: SortDataService) {
    this.data = [];
    this.query = {
      productName: "",
      modelName: "",
      specName:"",
      order: ""
    }
    this.putInfo = {
      productName: "",
      productOrder: "",
      modelName: "",
      modelOrder: "",
      modelId: "",
      specName:"",
      specOrder:"",
      id: "",
      productId: ""
    }
  }
  resetForm() {
    this.query = {
      productName: "",
      specName:"",
      modelName: "",
      order: ""
    }
  }
  getData() {
    this.http.post('./api/spec/specList', this.query)
      .subscribe(res => {
        this.data = this.sortService.sort(res['list']);
      });
  }

  ngOnInit() {
    this.getData();
    this.validateForm = this.fb.group({
      productName: [null, [Validators.required]],
      productOrder: [null, [Validators.required]],
      modelName: [null, [Validators.required]],
      modelOrder: [null, [Validators.required]],
      specName: [null, [Validators.required]],
      specOrder: [null, [Validators.required]]
    });
  }

  //修改界面模态框

  putClick(data) {
    this.putInfo.productName = data.product_name;
    this.putInfo.modelName = data.model_name;
    this.putInfo.id = data.id;
    this.putInfo.productId = data.product_id;
    this.putInfo.modelOrder = data.model_order;
    this.putInfo.productOrder = data.product_order;
    this.putInfo.modelId = data.model_id;
    this.putInfo.specName = data.spec_name;
    this.putInfo.specOrder = data.spec_order;
    this.isVisible = true;
  }


  isVisible = false;
  isConfirmLoading = false;
  showModal = () => {
    this.isVisible = true;
  };
  handleOk = (e) => {
    this.isConfirmLoading = true;
    this.http.post('./api/spec/specPut', this.putInfo)
      .subscribe(res => {
        if (res['code'] == 0) {
          this.isConfirmLoading = false;
          this.isVisible = false;
          this.createMessage('success', '修改成功');
          this.getData();
          this.putInfo = {
            productName: "",
            productOrder: "",
            modelName: "",
            modelOrder: "",
            modelId: "",
            specName:"",
            specOrder:"",
            id: "",
            productId: ""
          }
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

  //confirm
  _allChecked = false;
  _indeterminate = false;

  _refreshStatus() {
    const allChecked = this.data.length == 0 ? false : this.data.every(value => value.checked === true);
    const allUnChecked = this.data.length == 0 ? true : this.data.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);

  }

  _checkAll(value) {
    if (value) {
      this.data.forEach(data => {
        data.checked = true;
      });
    } else {
      this.data.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }
  showConfirm = () => {
    let ids = [];
    let str = "";
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].checked) {
        ids.push(this.data[i].id);
        str += String(this.data[i].model_name) + String(this.data[i].product_name) + ","
      }
    }
    var that = this;
    this.modalService.confirm({
      title: '是否确认删除',
      content: '<b>型号:' + str + '</b>',
      onOk() {
        that.http.post('./api/spec/specDelete', {
          ids: ids
        }).subscribe(res => {
          if (res['code'] == 0) {
            that.createMessage('success', '删除成功');
            that.getData();
            that._refreshStatus();
          } else {
            that.createMessage('error', '系统异常');
          }
        })

      },
      onCancel() {
      }
    });
  };

  exportFn(){
    this.http.post('./api/spec/export', this.query)
      .subscribe(res => {
        console.log(res)
        //this.data = this.sortService.sort(res['list']);
      });
  }
}
