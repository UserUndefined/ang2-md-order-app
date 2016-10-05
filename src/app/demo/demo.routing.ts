import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from "./demo.component";
import {AuthorisationService} from '../shared/services/authorisation.service';

const demoRoutes: Routes = [
  { path: 'demo', component: DemoComponent, canActivate: [AuthorisationService] }
];

export const demoRouting: ModuleWithProviders = RouterModule.forChild(demoRoutes);
