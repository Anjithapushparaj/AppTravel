import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-package',
  templateUrl: './list-package.component.html',
  styleUrls: ['./list-package.component.css']
})
export class ListPackageComponent implements OnInit {
  @Input() packg: any[];

  constructor( ) { }

  ngOnInit(): void {
  }

}
