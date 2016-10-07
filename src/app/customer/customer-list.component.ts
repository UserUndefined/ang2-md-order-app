import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'
import {Router, ActivatedRoute} from '@angular/router'
import {FormsModule} from '@angular/forms'

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'customer-list',
  styleUrls: [ './customer.style.css' ],
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  customerList: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.customerList = [
      {name: 'AA Builders', postcode: 'AB12 3CD'},
      {name: 'BB Plumbers', postcode: 'GH23 3CD'},
      {name: 'CC Carpenters', postcode: 'KJ23 3CD'},
      {name: 'DD Roofers', postcode: 'PO23 3CD'},
      {name: 'EE Painters', postcode: 'RG67 3CD'}
    ];
  }

}
