import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerService } from './service/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  navVal = 'from Link1';
  customerDetails = [];
  constructor(private route: Router,
    private custService:CustomerService) {
    const navg = this.route.getCurrentNavigation();
    this.getEmployee().subscribe((employee) => {
      if (employee && employee.address && employee.address.state) {
        console.log(employee.address.state);
      }
    });
    if (navg.extras && navg.extras.state) {
      const state = navg.extras.state;
      // this.navVal = state['abc'];
      this.navVal = navg.extras.state['abc'];
    }
  }
  getEmployee(): Observable<any> {
    return of({});
  }
  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.custService.fetchCustomerDetails().subscribe((custData)=>{
      this.customerDetails = custData;
      console.log(this.customerDetails);
    })
  }

  onCreateCustomer(){
    this.route.navigate(['/customer/add']);
  }
}
