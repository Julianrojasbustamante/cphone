import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomersViewModule} from "./customers-view/customers-view.module";
import {HeaderComponent} from "./core/header/header.component";
import {FooterComponent} from "./core/footer/footer.component";
import {AdminViewModule} from "./admin-view/admin-view.module";
import {DataServices} from "./customers-view/services/data.services";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomersViewModule,
    FormsModule,
    AdminViewModule,
    HttpClientModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
