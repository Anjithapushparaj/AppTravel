import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PackageComponent } from './package/package.component';
import {AddPackageComponent} from './package/add-package/add-package.component';
const routes: Routes = [
  {
      path: 'package/add',
      component: AddPackageComponent
  },
  {
    path: 'package/list-package',
    component: PackageComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }, 
  {
    path: '',
    redirectTo: '/package/list-package',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
