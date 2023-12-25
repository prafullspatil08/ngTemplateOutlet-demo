import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PassingDataComponent } from './passing-data/passing-data.component';


@NgModule({
  declarations: [
    ExampleComponent,
    HomePageComponent,
    PassingDataComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
