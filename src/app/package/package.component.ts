import { Component, OnInit } from '@angular/core';
import { PackageService } from './service/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages = [];
  myName;
  employeeName = [];
  empName;
  constructor( private pkgService: PackageService){}
  ngOnInit(): void {
    this.getPackages();
    this.getName();
    this.getEmpName();
  }
  getName(){
    this.pkgService.getMyname().subscribe((name)=>{ 
      this.myName = name;
    });
  }
  getEmpName(){
    this.pkgService.getPersonName().subscribe((pname)=>{ 
      this.employeeName = pname;
      console.log(this.employeeName);
      this.empName = this.employeeName[0].name;

    });
  }
  
  getPackages(){
    const abc = this.pkgService.getUserName();
    console.log(abc);
    // asychronous call     
    this.pkgService.fetchPackages().subscribe((pkgData) => {
      this.packages = pkgData;
      console.log(pkgData);
    });
  }
  onCreatePackage(){}
}
