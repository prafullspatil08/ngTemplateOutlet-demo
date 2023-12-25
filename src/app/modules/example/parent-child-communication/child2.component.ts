import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: ` <ng-container [ngTemplateOutlet]="itemTemplate"></ng-container> `,
})
export class Child2Component {
  @Input() itemTemplate!: TemplateRef<HTMLElement>;
}
