import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {Dashboard} from "./dashboard.component";
import { dashboardRouting } from './dashboard.routing';

import { Calendar } from './calendar'
import { BaFullCalendar } from '../shared/components';
import {CalendarService} from './calendar/calendar.service';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    Dashboard,
    Calendar,
    BaFullCalendar
  ],
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting,
    MaterialModule
  ],
  providers: [
    CalendarService
  ]
})

export class DashboardModule{}
