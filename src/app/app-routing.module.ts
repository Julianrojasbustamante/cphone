import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./customers-view/home-page/home-page.component";
import {CatalogueComponent} from "./customers-view/catalogue/catalogue.component";
import {ProductComponent} from "./customers-view/product/product.component";
import {ProductsComponent} from "./admin-view/products/products.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'inicio', component: HomePageComponent},
  {path: 'catalogo', component: CatalogueComponent},
  {path: 'catalogo/:categoria', component: CatalogueComponent},
  {path: 'producto/:id', component: ProductComponent},
  {path: 'admin', component: ProductsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
