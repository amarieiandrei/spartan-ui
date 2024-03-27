import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-new-controls-flow',
  standalone: true,
  imports: [CommonModule, HlmSeparatorDirective],
  templateUrl: './new-controls-flow.component.html',
})
export class NewControlsFlowComponent { }
