import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from '../../core/card/card.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardComponent
  ]
})
export class DashboardModule { }
