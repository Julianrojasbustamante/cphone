import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import {AdminService} from "./services/admin-service";

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [AdminService],
})
export class AdminViewModule { }
