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
    path: '**',
    redirectTo: '',
  },
];
