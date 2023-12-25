import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent components.</h1>
    <app-child1>
        <p>This template is projected to the child.</p>
    </app-child1>
  `
})
export class ParentComponent {

}
