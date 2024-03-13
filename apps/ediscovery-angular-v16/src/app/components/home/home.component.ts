import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from 'libs/ui/ui-button-helm/src';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'spartan-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HlmButtonDirective],
  template: `
    <button hlmBtn variant="default" routerLink="/signals">Signals</button>
    <button hlmBtn variant="destructive" routerLink="/standalone-components">
      Standalone Components
    </button>
  `,
})
export class HomeComponent {
  public setRandomVariant = (): string => {
    const variants: string[] = [
      'default',
      'destructive',
      'outline',
      'secondary',
      'ghost',
      'link',
    ];
    return variants[parseInt((Math.random() * variants.length).toFixed())];
  };
}
