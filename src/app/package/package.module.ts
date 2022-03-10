import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package.component';
import { ListPackageComponent } from './list-package/list-package.component';
import { AddPackageComponent } from './add-package/add-package.component';



@NgModule({
  declarations: [
    PackageComponent,
    ListPackageComponent,
    AddPackageComponent
  ],
  imports: [
    CommonModule
  ],
  
  exports:[PackageComponent]
})
export class PackageModule { }
