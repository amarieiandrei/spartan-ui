import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'spartan-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent { }
