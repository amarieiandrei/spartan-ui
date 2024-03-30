import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-defferable-views',
  standalone: true,
  imports: [CommonModule, HlmSeparatorDirective],
  templateUrl: './defferable-views.component.html',
})
export class DefferableViewsComponent {}
