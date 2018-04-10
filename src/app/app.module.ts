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
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers:[MenuDataService,AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }