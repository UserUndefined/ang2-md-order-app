import { Component, OnInit } from '@angular/core';

import { Calendar } from './calendar'

@Component({
  selector: 'dashboard',
  providers: [Calendar],
  styleUrls: [ './dashboard.style.css' ],
  templateUrl: './dashboard.template.html'
})
export class Dashboard {

  customerList: any;

  constructor(public calendar: Calendar) {
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
