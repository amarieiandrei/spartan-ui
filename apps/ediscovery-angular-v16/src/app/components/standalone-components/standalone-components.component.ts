import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spartan-standalone-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-components.component.html',
})
export class StandaloneComponentsComponent {}
