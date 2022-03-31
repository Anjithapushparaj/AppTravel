import { Component, OnInit, HostListener } from '@angular/core';
import { PackageService } from './service/package.service';
import  { Router } from '@angular/router';
import { filter } from 'lodash';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages = [];
  myName: string;
  employeeName = [];
  empName;
  test = 3;
  isAdmin = false;
  searchPattern;
  filteredPackages;
  constructor( 
    private pkgService: PackageService, 
    private router: Router
  ){}
    @HostListener('document:keydown.esc') hide(evt: KeyboardEvent){
      this.searchPattern = '';
      this.filteredPackages = filter(this.packages, (pkg) => pkg.pkdName.toLowerCase().includes(this.searchPattern));

    }
  ngOnInit(): void {
    // this.getPackages();
    this.getName();
    this.getEmpName();
    this.fetchPack();
    this.isAdmin = (this.pkgService.getUserRole() === 'Admin');
    // this.getNewPackages();
  }
  // getNewPackages(){
  // }
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
    console.log(abc)    
    this.pkgService.fetchPackages().subscribe((pkgData) => {
      this.packages = pkgData;
      this.filteredPackages = pkgData;
     });
  }
  onCreatePackage(){
    this.router.navigate(['/package/add']);
  }
  fetchPack(){
    this.getPackages();
  }
  onSearchPackage(event){
    console.log('searchPattern',this.searchPattern);
    this.searchPattern = event ? event.target.value.toLowerCase():this.searchPattern;
    this.filteredPackages = filter(this.packages, (pkg) => pkg.pkdName.toLowerCase().includes(this.searchPattern));
    console.log('filteredPack',this.filteredPackages);

  }
}
