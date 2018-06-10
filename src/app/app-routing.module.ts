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
    {path:"/",component:GoodListComponent},
    {path:"storehouse",component:GoodListComponent},
    {path:"storehouse/goodList",component:GoodListComponent},
    {path:"storehouse/goodIn",component:GoodsInComponent},
    {path:"storehouse/goodOut",component:GoodsOutComponent},
    {path:"storehouse/sheet",component:SheetComponent},
    {path:"price",component:PriceListComponent},
    {path:"price/list",component:PriceListComponent},
    {path:"price/option",component:PriceOptionComponent},
    {path:"price/history",component:PriceHistoryComponent},
    {path:"system",component:PriceListComponent},
    {path:"system/users",component:PriceListComponent},
    {path:"system/role",component:PriceOptionComponent},
    {path:"system/dictionary",component:PriceHistoryComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}