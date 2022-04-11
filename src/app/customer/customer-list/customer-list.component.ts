import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() customer: any[]; 
  custDetails=[];

  constructor( 
    private rtr:Router, 
    private custService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }
  getCustomerDetails(){
    this.custDetails = this.customer;
  }
  editCustomerDetails(customer:any){
    this.rtr.navigate(['/customer/add'],{ state: { customer }});
  }
  deleteCustomerDetails(id){
    console.log('customerId',id);
    this.custService.deleteCustomer(id);
      this.custService.fetchCustomerDetails().subscribe((data)=>{
        this.custDetails =data;
      })

  }
  

}
