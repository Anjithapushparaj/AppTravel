import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packages = [
    {
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

  //  private http: HttpClient
  constructor(  ) { }

  getUserName(){
    return 'Anjitha P';
  }
  fetchPackages(): Observable<any[]>{
    return of(this.packages);
  }

  // addPackage(): Observable<any>{
  //   return this.http.post('', {});
  
  // }
}
