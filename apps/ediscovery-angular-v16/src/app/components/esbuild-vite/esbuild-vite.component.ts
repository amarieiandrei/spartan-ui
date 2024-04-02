import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//directives
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-esbuild-vite',
  standalone: true,
  imports: [CommonModule, HlmSeparatorDirective],
  templateUrl: './esbuild-vite.component.html',
})
export class EsbuildViteComponent { }
