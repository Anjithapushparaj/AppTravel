import { Component, OnInit } from '@angular/core';

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
  first;
  foodOption1;
  price;
  sublocations = [];
  sublocationError = '';
  subloc;

  constructor() { }

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

}
