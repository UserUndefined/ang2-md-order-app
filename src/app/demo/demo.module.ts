import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {DemoComponent} from "./demo.component";

import { demoRouting } from './demo.routing';

import {SelectModule} from 'angular2-select';
import {AuthorisationService} from '../shared/services/authorisation.service';
import {HeadingService} from "../shared/services";
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    demoRouting,
    MaterialModule
  ],
  providers: [
    AuthorisationService,
    HeadingService
  ]
})

export class DemoModule{}
