import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

// components
import { GenericAccordionComponent } from '../generic-accordion/generic-accordion.component';
@Component({
  selector: 'spartan-standalone-components',
  // Standalone Components
  standalone: true,
  imports: [CommonModule, GenericAccordionComponent, HlmSeparatorDirective],
  templateUrl: './standalone-components.component.html',
})
export class StandaloneComponentsComponent {
  // General Knowledge
  firstItem: WritableSignal<any> = signal({
    question: `The Old way of doing Things`,
    answer: `Until now, developers have had to create or update an existing ng module in order to use a freshly created component.
    
    Ng modules have been used to specify which components, directives and pipes are available to use in templates.
    
    The focus shifts from ng modules to components. Components are becoming a central concept in Angular.
    
    This makes ng modules optional for development.`,
  });
  secondItem: WritableSignal<any> = signal({
    question: `Standalone Components`,
    answer: `The new standalone API makes it possible to write angular components, directives and pipes without creating an associated ng module.
    
    Standalone components are self contained and directly manage their template dependecies.`,
  });
  thirdItem: WritableSignal<any> = signal({
    question: `Benefits of this new Approach`,
    answer: `👉 Frinctioness component creation
    Making ng modules optional reduces the friction of creating a new component. There's just less code to write and less files to open and modify.

    👉 Simplified learning journey
    This is more than just a syntax change. Lowers the number of concepts a developer needs to understand, basically simplifies the Angular learning journey.

    👉 Lazy-loading for made easy
    The self contained components can be packaged, reused and lazy loaded on their own.`,
  });
  fourthItem: WritableSignal<any> = signal({
    question: `Lazy Loading`,
    answer: `Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times.
    
    Lazy loading can occur on different moments in the application, but it typically happens on some user interactions such as clicking, scrolling and navigation.
    
    This concept helps us to load and bootstrap the application faster because lazy loaded components isn't part of the main bundle, it's loaded for some user interaction on page.`,
  });
}
