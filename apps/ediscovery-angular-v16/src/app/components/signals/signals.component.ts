import {
  Component,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { HlmH2Directive } from 'libs/ui/ui-typography-helm/src';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';
import { HlmInputDirective } from 'libs/ui/ui-input-helm/src';

// Components
import { GenericAccordionComponent } from '../generic-accordion/generic-accordion.component';
@Component({
  selector: 'spartan-signals',
  standalone: true,
  imports: [
    // Modules
    CommonModule,
    // Components
    GenericAccordionComponent,
    // Directives
    HlmH2Directive,
    HlmButtonDirective,
    HlmSeparatorDirective,
    HlmInputDirective,
  ],
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  // Writable Signals
  search = signal(localStorage.getItem('searchString') ?? '');
  users = signal([
    { id: 1, name: 'Andrei' },
    { id: 2, name: 'Lucian' },
    { id: 3, name: 'Anton' },
  ]);
  // Whenever any signal value inside callback function changes the effect function will be re-executed!
  logger = effect(() => {
    localStorage.setItem('searchString', this.search());
  });
  filteredUsers = computed(() =>
    this.users().filter((u) => u.name.startsWith(this.search()))
  );

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value);
  }

  addUser() {
    // When we update a signal we change the reference to the new array.
    this.users.update((users) => [...users, { id: 3, name: 'John' }]);
  }

  // General Knowledge
  firstItem: WritableSignal<any> = signal({
    question: `General Knowledge about Signals`,
    answer: `From Angular version 16 we have a new reactive primitive in Angular Core called Signals. Signal primitive bring the fine-grained reactivity into Angular Core and could unleash the more efficient and more targeted change detection mechanism that doesn't rely on Zone js library anymore.`,
  });
  secondItem: WritableSignal<any> = signal({
    question: `What is wrong with the Zone js library and Change Detection right now?`,
    answer: `In general, back in the past, Zone js third party library was a great solution, it could, kind of magically, detect changes for developers in Angular applications state and synchronize or refresh the component without any additional work from a developer side. But, the more application grows the more often Zone js and Change detection becomes a bottleneck (blocaj) in the application  performance and in order to solve those performance issues developers had to dive deeper and deeper into the process of how these things are working in Angular.
      
      Another drawback (dezavantaj) is that Zone js can't tell Angular which exactly component has changed instead it just notifies Angular that some event happen in the application that might change the state of one or more components, for example in the component 3, but we don't know exactly the component and because of that, Angular has to perform the change detection cycle for all components tree from top to bottom and this is not the best approach.

      Zone js it is a third party library that is being used by Angular and it is included into the final bundle, so if we get rid of Zone js then we can obviously reduce the bundle size of the application.

      So this fine-grained reactivity primitive (inovație) that comes with the new concept of Signals can significantly improve change detection and make it more targeted and perform change detection only for components where their data model has changed.`,
  });
  thirdItem: WritableSignal<any> = signal({
    question: `What are signals?`,
    answer: `A signal is like a variable. It holds a value for us and we can change that value whenever we would like. Unlike a variable though, a signal knows where in the application is used, like which components are displaying its value in their templates, and it can signal to those components whenever we change the value inside. Basically, it is a wrapper around a value that can notify interested consumers when that value changes. Signals can contain any value, from simple primitives to complex data structures.
    
      A signal's value is always read through a getter function, which allows Angular to track where the signal is used.`,
  });
  fourthItem: WritableSignal<any> = signal({
    question: `Writable Signals, Computed Signals, Effects`,
    answer: `Writable signals provide an API for updating their values directly. You create writable signals by calling the signal function with the signal's initial value.
    
    Computed Signals can track all the signal changes and recalculate signal values that are based on, each time, in order to have the UI updated with the newest values. They derive their values from the values of other signals and because signals can notify consumers when they change, computed signals are automatically kept up to date without us having to set them ourselves.
    
    An Effect is something you want to have happen whenever some signals change. With the Effect API, we can tell Angular to run a function which is going to use the values of some signals and Angular will take care of automatically re-running that function if those signals are updated. Effects are helping developer to perform side effects when the value of any signal is changing.

    For example, image I want to record the last value of search signal in the local storage and use it as an initial value for the signal if the user reload the page. For that we can use a special function called effect that takes a callback function as a parameter and inside you can define the logic. Whenever any signal value inside callback function changes the effect function will be re-executed.`,
  });
  fifthItem: WritableSignal<any> = signal({
    question: `Advanced topics`,
    answer: `Signal equality functions:
    
    When creating a signal, you can optionally provide an equality function, which will be used to check whether the new value is actually different than the previous one.`,
    example: true,
  });
}
