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
      selectedPackage:'PKG_1',
      tripDays:10,
      tripStartDate:'2022-03-11',
      tripEndDate:'2022-03-20',
      price:30000,
      address:'ADDRESS_1',
      boardingLocation:'Trivandrum',
      foodOptions:['Breakfast', 'Lunch', 'Dinner'],
      sublocations:['1','2','3'],

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
      selectedPackage:'PKG_2',
      tripDays:8,
      tripStartDate:'2022-03-11',
      tripEndDate:'2022-03-20',
      price:30000,
      address:'ADDRESS_2',
      boardingLocation:'Kochi',
      foodOptions:['Breakfast', 'Lunch', 'Dinner'],
      sublocations:['1','2','3'],
      travelMode:'Bus'
    },
    {
      customerId: 'CUST_000003',
      customerType:'NON_PACKAGE',
      customerName:'customer3',
      phoneNumber:9544001241,
      email:'customer3@gmail.com',
      selectedPackage:'PKG_3',
      tripDays:5,
      tripStartDate:'2022-03-11',
      tripEndDate:'2022-03-20',
      price:30000,
      address:'ADRESS_3',
      boardingLocation:'Pathanamthitta',
      foodOptions:['Breakfast', 'Lunch', 'Dinner'],
      sublocations:['1','2','3'],
      travelMode:'Bus'
    }
  ];
  constructor() { }
  fetchCustomerDetails(): Observable<any[]>{
    return of(this.customers);
  }
  addNewCustomer(cust:any){
    this.customers.push(cust);
  }
  getExsistingCustomerIds(): Observable<string[]>{
    const customerIds =[];
    this.customers.map((cust)=>{
      customerIds.push(cust.customerId);
    });
    return of(customerIds);

  }
  deleteCustomer(id:string){
    const customers = [];
    this.customers.forEach((cust)=>{
      if(cust.customerId !== id){
        customers.push(cust);
      }
    })
    this.customers = customers;
  }
}
