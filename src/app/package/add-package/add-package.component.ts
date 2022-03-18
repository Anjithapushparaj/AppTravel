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

  constructor() { }

  ngOnInit(): void {
  }

}
