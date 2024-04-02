import {
  Component,
  WritableSignal,
  signal,
} from '@angular/core';

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
export class SolidPrinciplesComponent {

  // General Knowledge
  firstItem: WritableSignal<any> = signal({
    question: `What is Design Principle?`,
    answer: `A design principle is a recommandation like how to design our code in order to keep it maintainable, flexible and extensible. Because this is a recommandation it means it is very abstract.`,
  });
  secondItem: WritableSignal<any> = signal({
    question: `What is Design Patterns?`,
    answer: `Design Patterns exist to solve concrete use cases and implement one, two or more design principles.`,
    example: true,
  });
  thirdItem: WritableSignal<any> = signal({
    question: `Single Responsibility Principle`,
    answer: `A class should have one and only one reason to change, meaning that a class should have only one job.
    
    Which means that a component / class / model should do only one thing but do it well. You describe the responsibility of some certain component once you encounter the word 'AND', it might be the signal that your component does already too much.`,
  });
  fourthItem: WritableSignal<any> = signal({
    question: `Open / Closed Principle`,
    answer: `The O in SOLID, the Open-Closed principle was invented by Bertrand Meyer in 1988 in a lovely book called object-oriented software construction.
    
    Software entities should be open for extension, but closed for modification.
    
    I can say that for every single task that I did I just extend the code and I didn't touch anything that already exist in the application eDiscovery / ReefExpress. ❤️`,
  });
  fifthItem: WritableSignal<any> = signal({
    question: `Liskov Substitution Principle`,
    answer: `Liskov principle was invented by Barbara Liskov in 1988.
    
    Derived classes must be usable through the base class interface, without the need for the user to know the difference.
    
    The principle defines that in an inheritance, objects of a superclass (or parent class) should be substitutable with objects of its subclasses (or child class) without breaking the application or causing any error.
    
    In very plain terms, you want the objects of your subclasses to behave the same way as the objects of your superclass.`,
  });
  sixthItem: WritableSignal<any> = signal({
    question: `Interface Segregation Principle`,
    answer: `A client should never be forced to implement an interface that it doesn't use, or clients shouldn't be forced to depend on methods they do not use.
    
    Just as the term segregation means — this is all about keeping things separated, meaning separating the interfaces.
    
    This means that we should split one big interface into many others small interfaces.`,
  });
  seventhItem: WritableSignal<any> = signal({
    question: `Dependency Inversion Principle`,
    answer: `Entities must depend on abstractions, not on concretions.
    
    It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.
    
    In plain terms, this principle states that your classes should depend upon interfaces or abstract classes instead of concrete classes and functions. This makes your classes open to extension, following the open-closed principle.`,
  });
}
