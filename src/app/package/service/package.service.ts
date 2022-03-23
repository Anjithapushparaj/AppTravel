import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//  import { HttpClient } from '@angular/common/http'
interface Person {
  name: string;
  age: number;
  phone: number;
  qlf:string;
}
@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packages = [
    {
      pkgId:'PKG_1',
      pkdName:'Trivandrum Holiday',
      pkgDesc:'' ,
      destination: 'Trivandrum',
      subLocations: ['Kovalam', 'Varkala', 'Kanyakumari'],
      tripDays: 3,
      travelOptions: ['Bus', 'Train', 'Car'],
      foodOptions: ['Breakfast', 'Lunch', 'Dinner'],
      price: 20000
    },
    {
      pkgId:'PKG_2',
      pkdName:'Kochi',
      pkgDesc:'' ,
      destination: 'Kochi',
      subLocations: ['Fortkochi', 'Marinedrive', 'Cherai'],
      tripDays: 2,
      travelOptions: ['Bus', 'Train', 'Car'],
      foodOptions: ['Breakfast', 'Lunch', 'Dinner'],
      price: 30000
    }
   ];
   employee = [
    {
      name: 'Anjitha', 
      age: 28, 
      phone: 678,
      qlf: 'Mtech'}

   ];

  //  private http: HttpClient
  constructor(  ) { }

  getUserName(){
    return this.packages;
  }
  fetchPackages(): Observable<any[]>{
    return of(this.packages);
  }
  getMyname(): Observable<string>{
    return of('Anjitha'); 
  }
  getPersonName(): Observable<Person[]>{
    return of(this.employee);
  }
  getUserRole(){
    return 'Admin';
  }
  addPackage(pkg: any){
    this.packages.push(pkg);
    console.log('NewPackages',this.packages);
  }
  getExsistingPackageIds(): Observable<string[]>{
    const packageIds =[];
    this.packages.map((pkg)=>{
      packageIds.push(pkg.pkgId);
    });
    return of(packageIds);

  }

  // addPackage(): Observable<any>{
  //   return this.http.post('', {});
  // }
}
