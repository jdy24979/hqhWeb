import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillAddComponent } from "./components/pages/bill/bill-add/bill-add.component";
import { BillDetailComponent } from "./components/pages/bill/bill-detail/bill-detail.component";
import { BillListComponent } from "./components/pages/bill/bill-list/bill-list.component";
import { BillTotalComponent } from "./components/pages/bill/bill-total/bill-total.component";
import { PriceHistoryComponent } from "./components/pages/price/price-history/price-history.component";
import { PriceListComponent } from "./components/pages/price/price-list/price-list.component";
import { PriceOptionComponent } from "./components/pages/price/price-option/price-option.component";
import { ModelComponent } from "./components/pages/product/model/model.component";
import { ModelAddComponent } from "./components/pages/product/model/model-add/model-add.component";
import { ProductComponent } from "./components/pages/product/product/product.component";
import { SpecComponent } from "./components/pages/product/spec/spec.component";
import { SpecAddComponent } from "./components/pages/product/spec/spec-add/spec-add.component";
import { GoodListComponent } from "./components/pages/storehouse/good-list/good-list.component";
import { GoodsInComponent } from "./components/pages/storehouse/goods-in/goods-in.component";
import { GoodsInAddComponent } from "./components/pages/storehouse/goods-in/goods-in-add/goods-in-add.component";
import { GoodsOutComponent } from "./components/pages/storehouse/goods-out/goods-out.component";
import { GoodsOutAddComponent } from "./components/pages/storehouse/goods-out/goods-out-add/goods-out-add.component";
import { SheetComponent } from "./components/pages/storehouse/sheet/sheet.component";




const routelist = [
    { path: "", component: GoodListComponent },
    { path: "home/storehouse", component: GoodListComponent },
    { path: "home/storehouse/goodsList", component: GoodListComponent },
    { path: "home/storehouse/goodsIn", component: GoodsInComponent },
    { path: "home/storehouse/goodsIn/add", component: GoodsInAddComponent },
    { path: "home/storehouse/goodsOut", component: GoodsOutComponent },
    { path: "home/storehouse/goodsOut/add", component: GoodsOutAddComponent },
    { path: "home/storehouse/sheet", component: SheetComponent },
    { path: "home/price", component: PriceListComponent },
    { path: "home/price/list", component: PriceListComponent },
    { path: "home/price/option", component: PriceOptionComponent },
    { path: "home/price/history", component: PriceHistoryComponent },
    { path: "home/system", component: PriceListComponent },
    { path: "home/system/users", component: PriceListComponent },
    { path: "home/system/role", component: PriceOptionComponent },
    { path: "home/system/dictionary", component: PriceHistoryComponent },
    { path: "home/bill", component: BillTotalComponent },
    { path: "home/bill/billTotal", component: BillTotalComponent },
    { path: "home/bill/list", component: BillListComponent },
    { path: "home/bill/detail", component: BillDetailComponent },
    { path: "home/bill/add", component: BillAddComponent },
    { path: "home/product", component: ProductComponent },
    { path: "home/product/product", component: ProductComponent },
    { path: "home/product/model", component: ModelComponent },
    { path: "home/product/model/add", component: ModelAddComponent },
    { path: "home/product/spec", component: SpecComponent },
    { path: "home/product/spec/add", component: SpecAddComponent }
];
const routes: Routes = routelist;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}