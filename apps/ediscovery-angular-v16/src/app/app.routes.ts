import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./components/signals/signals.component').then(
        (m) => m.SignalsComponent
      ),
  },
  {
    path: 'standalone-components',
    loadComponent: () =>
      import(
        './components/standalone-components/standalone-components.component'
      ).then((m) => m.StandaloneComponentsComponent),
  },
  {
    path: 'cookies',
    loadComponent: () =>
      import('./components/cookies/cookies.component').then(
        (m) => m.CookiesComponent
      ),
  },
  {
    path: 'solid-principles',
    loadComponent: () =>
      import('./components/solid-principles/solid-principles.component').then(
        (m) => m.SolidPrinciplesComponent
      ),
  },
  {
    path: 'new-controls-flow',
    loadComponent: () =>
      import('./components/new-controls-flow/new-controls-flow.component').then(
        (m) => m.NewControlsFlowComponent
      ),
  },
  {
    path: 'deffered-loading',
    loadComponent: () =>
      import('./components/deffered-loading/deffered-loading.component').then(
        (m) => m.DefferedLoadingComponent
      ),
  },
  {
    path: 'self-closing-tags-&-input-required',
    loadComponent: () =>
      import(
        './components/self-closing-tags-/self-closing-tags-.component'
      ).then((m) => m.SelfClosingTagsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
