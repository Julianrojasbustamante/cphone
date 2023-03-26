import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataTablesModule } from "angular-datatables";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    DataTablesModule,
    AppRoutingModule,
  ]
})
export class CustomersViewModule { }
