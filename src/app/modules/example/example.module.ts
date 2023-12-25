import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PassingDataComponent } from './passing-data/passing-data.component';
import { ParentComponent } from './parent-child-communication/parent.component';
import { Child1Component } from './parent-child-communication/child1.component';
import { Child2Component } from './parent-child-communication/child2.component';


@NgModule({
  declarations: [
    ExampleComponent,
    HomePageComponent,
    PassingDataComponent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
