import {Component, ViewChild, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './sideNavBar.loader.ts';

@Component({
  selector: 'side-nav-bar',
  template: require('./sideNavBar.html'),
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './sideNavBar.style.css' ]
})
export class SideNavBar {

  ngAfterViewInit() {

  }
}
