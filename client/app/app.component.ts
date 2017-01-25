import { Component } from '@angular/core';

@Component({
  selector: 'cmp-uce-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {
  public name = 'angular-apollo-stack';
}
