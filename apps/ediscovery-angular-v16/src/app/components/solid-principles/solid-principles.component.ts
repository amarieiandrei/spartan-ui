import { AfterViewInit, Component, WritableSignal, signal } from '@angular/core';

// Components
import { GenericAccordionComponent } from '../generic-accordion/generic-accordion.component';

// Modules
import { CommonModule } from '@angular/common';

// Directives
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';

@Component({
  selector: 'spartan-solid-principles',
  standalone: true,
  imports: [CommonModule, GenericAccordionComponent, HlmSeparatorDirective],
  templateUrl: './solid-principles.component.html',
})
export class SolidPrinciplesComponent implements AfterViewInit {
  dryPrinciple: HTMLElement | null = null;
  kissPrinciple: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.dryPrinciple = document.getElementById('dry-principle');
    this.kissPrinciple = document.getElementById('kiss-principle');

    this.dryPrinciple?.addEventListener('mouseover', () => {
      this.dryPrinciple?.classList.add('blur-none');
    });
    this.kissPrinciple?.addEventListener('mouseover', () => {
      this.kissPrinciple?.classList.add('blur-none');
    });
  }

  // General Knowledge
  firstItem: WritableSignal<any> = signal({
    question: `What is Design Principle?`,
    answer: `A design principle is a recommandation like how to design our code in order to keep it maintainable, flexible and extensible. Because this is a recommandation it means it is very abstract.`,
  });
  secondItem: WritableSignal<any> = signal({
    question: `What is Design Patterns?`,
    answer: `Design Patterns exist to solve concrete use cases and implement one, two or more design principles.`,
    example: true
  });
  thirdItem: WritableSignal<any> = signal({
    question: `Single Responsibility Principle`,
    answer: `Single Responsibility Principle`,
  });
  fourthItem: WritableSignal<any> = signal({
    question: `Open / Closed Principle`,
    answer: `Open / Closed Principle`,
  });
  fifthItem: WritableSignal<any> = signal({
    question: `Liskov Substitution Principle`,
    answer: `Liskov Substitution Principle`,
  });
  sixthItem: WritableSignal<any> = signal({
    question: `Interface Segregation Principle`,
    answer: `Interface Segregation Principle`,
  });
  seventhItem: WritableSignal<any> = signal({
    question: `Dependency Inversion Principle`,
    answer: `Dependency Inversion Principle`,
  });
}
