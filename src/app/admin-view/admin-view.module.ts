import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import {AdminService} from "./services/admin-service";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [AdminService],
})
export class AdminViewModule { }
