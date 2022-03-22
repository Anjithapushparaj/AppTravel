import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CustomerComponent]
})
export class CustomerModule { }
