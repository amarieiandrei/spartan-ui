import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-new-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule, HlmSeparatorDirective],
  templateUrl: './new-lifecycle-hooks.component.html',
})
export class NewLifecycleHooksComponent { }
