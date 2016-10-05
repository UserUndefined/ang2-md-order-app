import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavBar } from './sideNavBar.component';
import { MaterialModule } from '@angular/material';
import { MdSidenav } from '@angular/material/sidenav';

@NgModule({
  imports: [ RouterModule, CommonModule, MaterialModule.forRoot() ],
  declarations: [ SideNavBar ],
  exports: [ SideNavBar, MdSidenav ]
})
export class SideNavBarModule {}
