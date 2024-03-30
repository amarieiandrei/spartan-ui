import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from 'libs/ui/ui-button-helm/src';
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'spartan-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HlmButtonDirective,
    HlmSeparatorDirective,
  ],
  template: `
    <div
      class="custom-background h-screen grid grid-rows-3 grid-flow-col gap-4"
    >
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="/signals"
        class="m-auto"
      >
        Signals
      </button>
      <div hlmSeparator orientation="horizontal"></div>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="vertical"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="/standalone-components"
        class="m-auto"
      >
        Standalone Components
      </button>
      <div hlmSeparator orientation="horizontal"></div>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="vertical"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="/cookies"
        class="m-auto"
      >
        Cookies
      </button>
      <div hlmSeparator orientation="vertical"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="/solid-principles"
        class="m-auto"
      >
        SOLID Principles
      </button>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="horizontal"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="/new-controls-flow"
        class="m-auto"
      >
        New Controls Flow
      </button>
      <div hlmSeparator orientation="horizontal"></div>
      <div hlmSeparator orientation="horizontal"></div>
      <div hlmSeparator orientation="vertical"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="deffered-loading"
        class="m-auto"
      >
        Deffered Loading
      </button>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="vertical"></div>
      <div hlmSeparator orientation="vertical"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="self-closing-tags-&-input-required"
        class="m-auto"
      >
        Self Closing Tag / Marking Inputs as required
      </button>
      <div hlmSeparator orientation="vertical"></div>
      <button
        hlmBtn
        [variant]="setRandomVariant()"
        routerLink="defferable-views"
        class="m-auto"
      >
        Defferable Views
      </button>
      <div hlmSeparator orientation="horizontal"></div>
    </div>
  `,
})
export class HomeComponent {
  public setRandomVariant = (): any => {
    const variants: string[] = [
      'default',
      'destructive',
      'outline',
      'secondary',
    ];
    return variants[parseInt((Math.random() * variants.length).toFixed())];
  };
}
