import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { MainComponent } from './components/main/main.component';
import { MenuDataService } from './services/menu-data.service';
import { AddressService } from './services/address.service';
import { SortDataService } from './services/sort-data.service';
import { PageInfoService } from './services/page-info.service';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GoodsInComponent } from './components/pages/storehouse/goods-in/goods-in.component';
import { GoodsOutComponent } from './components/pages/storehouse/goods-out/goods-out.component';
import { GoodListComponent } from './components/pages/storehouse/good-list/good-list.component';
import { PriceListComponent } from './components/pages/price/price-list/price-list.component';
import { PriceOptionComponent } from './components/pages/price/price-option/price-option.component';
import { PriceHistoryComponent } from './components/pages/price/price-history/price-history.component';
import { UsersComponent } from './components/pages/system/users/users.component';
import { RoleComponent } from './components/pages/system/role/role.component';
import { DictionaryComponent } from './components/pages/system/dictionary/dictionary.component';
import { SheetComponent } from './components/pages/storehouse/sheet/sheet.component';
import { BillTotalComponent } from './components/pages/bill/bill-total/bill-total.component';
import { BillListComponent } from './components/pages/bill/bill-list/bill-list.component';
import { BillDetailComponent } from './components/pages/bill/bill-detail/bill-detail.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BillAddComponent } from './components/pages/bill/bill-add/bill-add.component';
import { ProductComponent } from './components/pages/product/product/product.component';
import { ModelComponent } from './components/pages/product/model/model.component';
import { SpecComponent } from './components/pages/product/spec/spec.component';


import { ReactiveFormsModule } from '@angular/forms';
import { ModelAddComponent } from './components/pages/product/model/model-add/model-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderComponent,
    MainComponent,
    MenuComponent,
    NavBarComponent,
    GoodsInComponent,
    GoodsOutComponent,
    GoodListComponent,
    PriceListComponent,
    PriceOptionComponent,
    PriceHistoryComponent,
    UsersComponent,
    RoleComponent,
    DictionaryComponent,
    SheetComponent,
    BillTotalComponent,
    BillListComponent,
    BillDetailComponent,
    IndexComponent,
    LoginComponent,
    LoadingComponent,
    BillAddComponent,
    ProductComponent,
    ModelComponent,
    SpecComponent,
    ModelAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:[MenuDataService,AddressService,PageInfoService,SortDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }