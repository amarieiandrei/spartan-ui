import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-self-closing-tags-',
  standalone: true,
  imports: [CommonModule, HlmSeparatorDirective],
  templateUrl: './self-closing-tags-.component.html',
})
export class SelfClosingTagsComponent {
  example: WritableSignal<string> = signal(`<super-duper-long-component-name [prop]="someVar"></super-duper-long-component-name>`);
  example2: WritableSignal<string> = signal(`<super-duper-long-component-name [prop]="someVar"/>`);
}
