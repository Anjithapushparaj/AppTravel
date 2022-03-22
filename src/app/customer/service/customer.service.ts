import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers = [
    {
      customerId: 'CUST_000001',
      customerType:'NON_PACKAGE',
      customerName:'customer1',
      phoneNumber:9544001241,
      email:'customer1@gmail.com',
      selectedPackage:'PKG_000001',
      tripDays:10,
      tripStartDate:'2022-03-11',
      tripEndDate:'2022-03-20',
      price:30000,
      address:'ADDRESS_1',
      boardingLocation:'',
      foodOptions:['Breakfast', 'Lunch', 'Dinner'],
      travelMode:'Bus'
      // discount:
      // tripStatus:
    },
    {
      customerId: 'CUST_000002',
      customerType:'NON_PACKAGE',
      customerName:'customer2',
      phoneNumber:9534128956,
      email:'customer2@gmail.com',
      selectedPackage:'PKG_000002',
      tripDays:10,
      tripStartDate:'2022-03-11',
      tripEndDate:'2022-03-20',
      price:30000,
      address:'ADDRESS_2',
      boardingLocation:'',
      foodOptions:['Breakfast', 'Lunch', 'Dinner'],
      travelMode:'Bus'
    },
    {
      customerId: 'CUST_000003',
      customerType:'NON_PACKAGE',
      customerName:'customer3',
      phoneNumber:9544001241,
      email:'customer3@gmail.com',
      selectedPackage:'PKG_000003',
      tripDays:10,
      tripStartDate:'2022-03-11',
      tripEndDate:'2022-03-20',
      price:30000,
      address:'ADRESS_3',
      boardingLocation:'',
      foodOptions:['Breakfast', 'Lunch', 'Dinner'],
      travelMode:'Bus'
    }
  ];
  constructor() { }
  fetchCustomerDetails(): Observable<any[]>{
    return of(this.customers);
  }

}
