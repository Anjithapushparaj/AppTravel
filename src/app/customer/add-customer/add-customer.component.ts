import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/package/service/package.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerName;
  custPhoneNumber;
  email;
  selectedPKG;
  tripDays;
  tripStart;
  tripEnd;
  custPrice;
  custAddress;
  boardingLoc;
  foodOpt;
  travelMode;
  packages;
  minDate = new Date().toISOString().slice(0, 10) ; 
  maxDate;
  constructor( private custService:CustomerService,
    private custroute:Router,
    private pckService: PackageService) { }

  ngOnInit(): void {
    this.getPackages();
  }
  addCust(){
    const customer = {
      customerName:this.customerName,
      phoneNumber:this.custPhoneNumber,
      email:this.email,
      selectedPackage:this.selectedPKG,
      tripDays:this.tripDays,
      tripStartDate:this.tripStart,
      tripEndDate:this.tripEnd,
      price:this.custPrice,
      address:this.custAddress,
      boardingLocation:this.boardingLoc,
      foodOptions:this.foodOpt,
      travelMode:this.travelMode
    }
    this.custService.addNewCustomer(customer);
    this.custroute.navigate(['/customer']);
    
  }
  getPackages(){
    this.pckService.fetchPackages().subscribe((pkgs)=>{
      console.log(pkgs);
    })
  }

}
