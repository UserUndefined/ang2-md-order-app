import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {CustomerNewComponent} from "./customer-new.component";
import {CustomerListComponent} from "./customer-list.component";

import { customerRouting } from './customer.routing';

import {SelectModule} from 'angular2-select';
import {AuthorisationService} from '../shared/services/authorisation.service';
import {HeadingService} from "../shared/services";
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    CustomerNewComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    customerRouting,
    MaterialModule
  ],
  providers: [
    AuthorisationService,
    HeadingService
  ]
})

export class CustomerModule{}
