import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { sellerAuthGuard } from './seller-auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

const routes: Routes = [
  { component: HomeComponent, path: ''},
  { component: SellerComponent, path: 'seller-auth'},
  { component: SellerHomeComponent, path: 'seller-home', canActivate : [sellerAuthGuard]},
  { component: SellerAddProductComponent, path: 'seller-add-product', canActivate : [sellerAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
