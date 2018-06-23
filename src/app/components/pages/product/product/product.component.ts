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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  validateForm:FormGroup;
  putValidateForm:FormGroup;

  query: {
    name: String;
    order: String;
  };

  data;
  addInfo;
  putInfo;

  constructor(private _message: NzMessageService, private http: HttpClient,private fb: FormBuilder,private modalService: NzModalService,private sortService: SortDataService) {
    this.data = [];
    this.query = {
      name: "",
      order: null
    }
    this.addInfo = {
      name: "",
      order: ''
    }
    this.putInfo = {
      name: "",
      order: ''
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
      name: [ null, [ Validators.required ] ],
      order: [ null, [ Validators.required ] ]
    });
    this.putValidateForm = this.fb.group({
      name: [ null, [ Validators.required ] ],
      order: [ null, [ Validators.required ] ]
    });
  }

  // 模态框相关
  isVisible = false;
  isConfirmLoading = false;
  showModal = () => {
    this.isVisible = true;
  };
  handleOk = (e) => {
    this.isConfirmLoading = true;
    this.http.post('./api/product/productAdd', this.addInfo)
      .subscribe(res => {
        if (res['code'] == 0) {
          this.isConfirmLoading = false;
          this.isVisible = false;
          this.createMessage('success', '新增成功');
          this.getData();
          this.addInfo = {
            name: "",
            order: ''
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

  //修改界面模态框

  putClick (data){
    this.putInfo.name = data.name;
    this.putInfo.id = data.id;
    this.putInfo.order = data.order;
    this.putIsVisible = true;
  }

  putIsVisible = false;
  putIsConfirmLoading = false;
  putShowModal = () => {
    this.putIsVisible = true;
  };
  putHandleOk = (e) => {
    this.putIsConfirmLoading = true;
    this.http.post('./api/product/productPut', this.putInfo)
      .subscribe(res => {
        if (res['code'] == 0) {
          this.putIsConfirmLoading = false;
          this.putIsVisible = false;
          this.createMessage('success', '修改成功');
          this.getData();
          this.putInfo = {
            name: "",
            order: ''
          }
        } else {
          this.putIsConfirmLoading = false;
          this.createMessage('error', '系统异常');
        }
      })
  };

  putHandleCancel = (e) => {
    this.putIsVisible = false;
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
    let ids =[];
    let str = "";
    for(let i=0;i < this.data.length;i++){
      if(this.data[i].checked){
        ids.push(this.data[i].id);
        str += this.data[i].name +","
      }
    }
    var that = this;
    this.modalService.confirm({
      title  : '是否确认删除',
      content: '<b>产品:' + str + '</b>',
      onOk() {
        that.http.post('./api/product/productDelete',{
          ids:ids
        }).subscribe(res =>{
          if(res['code'] == 0){
            that.createMessage('success', '删除成功');
            that.getData();
            that._refreshStatus();
          }else{
            that.createMessage('error', '系统异常');
          }
        })
       
      },
      onCancel() {
      }
    });
  };
}
