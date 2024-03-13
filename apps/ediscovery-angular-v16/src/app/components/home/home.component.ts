import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from 'libs/ui/ui-button-helm/src';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'spartan-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HlmButtonDirective],
  template: `
  <div class="container">
    <button hlmBtn [variant]=setRandomVariant() routerLink="/signals" class="btn">Signals</button>
    <button hlmBtn [variant]=setRandomVariant() routerLink="/standalone-components" class="btn">
      Standalone Components
    </button>
  </div>
  `,
  styles: `
    .container {
      height: 100vh;
      display: flex;
      place-items: center;
    }
    .btn {
      margin: auto;
    }
  `
})
export class HomeComponent {
  public setRandomVariant = (): any => {
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
