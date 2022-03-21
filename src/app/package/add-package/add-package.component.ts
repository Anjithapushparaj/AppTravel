import { Component, OnInit } from '@angular/core';
import {PackageService} from './../service/package.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  isEditMode = false;
  packageName;
  location;
  sublocation;
  tripdays;
  travelOptions= [];
  foodOptions= [];
  price;
  sublocations = [];
  sublocationError = '';
  subloc;

  constructor( private service:PackageService, private rtr: Router) { }

  ngOnInit(): void {
  }
  addSublocation(){
    this.sublocationError = '';
    if(this.sublocations.length >= 5){
      this.sublocationError = 'Maximum limit is 5';
      this.sublocation = ''; 
      setTimeout(()=>{this.sublocationError = '';},3000);

      return;
    }
    if(this.sublocations.includes(this.sublocation)){
      this.sublocationError = 'Duplicate Sublocation';
      return;
    }
    if(this.sublocation){
        this.sublocations.push(this.sublocation);
        this.sublocation = ''; 

    }
  }
  onRemoveSublocation(val){
    const index = this.sublocations.indexOf(val);
    this.sublocations.splice(index,  1);
  }
  addPackage(){
    const pkg = { 
      pkdName:this.packageName,
      pkgDesc:'' ,
      destination:this.location,
      subLocations:this.sublocations ,
      tripDays:this.tripdays,
      travelOptions:this.travelOptions,
      foodOptions:this.foodOptions,
      price:this.price
    };
    this.service.addPackage(pkg);
    this.rtr.navigate(['/package/list-package']);
  }
  updateTravelOption(option){
    if(this.travelOptions.includes(option)){
      const index = this.travelOptions.indexOf(option);
      this.travelOptions.splice(index, 1);
    }
    else{
      this.travelOptions.push(option);
    }
    console.log(this.travelOptions);
  }
  updateFoodOptions(fdOption){
    if(this.foodOptions.includes(fdOption)){
      const findex = this.foodOptions.indexOf(fdOption);
      this.foodOptions.splice(findex, 1);
    }
    else{
      this.foodOptions.push(fdOption);
    }
    console.log(this.foodOptions);
  }

}
