import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <h1>Child component one</h1>

    <ng-template #parentTemplate>
      <ng-content></ng-content>
      <p>This Template is defined in child1. 
        We will send it to child2 component</p>
    </ng-template>

    <app-child2 [itemTemplate]="myTemplate"></app-child2>
  `
})
export class Child1Component {
  @ViewChild('parentTemplate') myTemplate!:TemplateRef<HTMLElement>;
}
