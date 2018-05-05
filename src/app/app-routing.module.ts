import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GoodListComponent } from "./components/pages/storehouse/good-list/good-list.component";
import { GoodsInComponent } from "./components/pages/storehouse/goods-in/goods-in.component";
import { GoodsOutComponent } from "./components/pages/storehouse/goods-out/goods-out.component";
import { SheetComponent } from "./components/pages/storehouse/sheet/sheet.component";

import { PriceListComponent } from "./components/pages/price/price-list/price-list.component";
import { PriceOptionComponent } from "./components/pages/price/price-option/price-option.component";
import { PriceHistoryComponent } from "./components/pages/price/price-history/price-history.component";

import { UsersComponent } from "./components/pages/system/users/users.component";
import { RoleComponent } from "./components/pages/system/role/role.component";
import { DictionaryComponent } from "./components/pages/system/dictionary/dictionary.component";
const routes: Routes = [
    {path:"home",component:GoodListComponent},
    {path:"home/storehouse",component:GoodListComponent},
    {path:"home/storehouse/goodList",component:GoodListComponent},
    {path:"home/storehouse/goodIn",component:GoodsInComponent},
    {path:"home/storehouse/goodOut",component:GoodsOutComponent},
    {path:"home/storehouse/sheet",component:SheetComponent},
    {path:"home/price",component:PriceListComponent},
    {path:"home/price/list",component:PriceListComponent},
    {path:"home/price/option",component:PriceOptionComponent},
    {path:"home/price/history",component:PriceHistoryComponent},
    {path:"home/system",component:PriceListComponent},
    {path:"home/system/users",component:PriceListComponent},
    {path:"home/system/role",component:PriceOptionComponent},
    {path:"home/system/dictionary",component:PriceHistoryComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}