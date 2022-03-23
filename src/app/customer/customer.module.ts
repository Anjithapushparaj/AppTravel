import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    FormsModule
  ]
})
export class CustomerModule { }
