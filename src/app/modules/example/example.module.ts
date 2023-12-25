import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PassingDataComponent } from './passing-data/passing-data.component';
import { ParentComponent } from './parent-child-communication/parent/parent.component';
import { ChildComponent } from './parent-child-communication/child/child.component';


@NgModule({
  declarations: [
    ExampleComponent,
    HomePageComponent,
    PassingDataComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
