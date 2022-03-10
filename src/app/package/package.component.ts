import { Component, OnInit } from '@angular/core';
import { PackageService } from './service/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages = [];
  constructor( private pkgService: PackageService) { }

  ngOnInit(): void {
    this.getPackages();
  }
  getPackages(){
    const abc = this.pkgService.getUserName();
    console.log(abc);
    this.pkgService.fetchPackages().subscribe((pkgData) => {
      this.packages = pkgData;
      console.log(pkgData);
      });
  }

  onCreatePackage(){

  }

}
