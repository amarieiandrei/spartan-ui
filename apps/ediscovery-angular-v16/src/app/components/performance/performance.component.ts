import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// directives
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-performance',
  standalone: true,
  imports: [CommonModule, HlmSeparatorDirective],
  templateUrl: './performance.component.html',
})
export class PerformanceComponent { }
