import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    MatSlideToggleModule,
  ]
})
export class AdminViewModule { }
