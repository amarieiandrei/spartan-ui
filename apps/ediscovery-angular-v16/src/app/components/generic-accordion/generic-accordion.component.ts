// Modules
import { CommonModule } from '@angular/common';

// Components
import { Component, Input, WritableSignal, signal } from '@angular/core';
import { HlmIconComponent } from 'libs/ui/ui-icon-helm/src';

// Directives
import { HlmAlertDirective, HlmAlertTitleDirective, HlmAlertDescriptionDirective } from 'libs/ui/ui-alert-helm/src';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

// Providers & Icons
import { provideIcons } from '@ng-icons/core';
import { lucideAlertTriangle } from '@ng-icons/lucide';

@Component({
  selector: 'spartan-generic-accordion',
  standalone: true,
  imports: [CommonModule, HlmIconComponent, HlmButtonDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertTitleDirective],
  providers: [provideIcons({ lucideAlertTriangle })],
  templateUrl: './generic-accordion.component.html',
  styles: `
    .collapse.show {
      visibility: visible;
    }
  `,
})
export class GenericAccordionComponent {
  @Input() firstItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
  @Input() secondItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
  @Input() thirdItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
  @Input() fourthItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
  @Input() fifthItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
    example: false
  });
  @Input() sixthItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
  @Input() seventhItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });


  // Signals Advanced Topics
  newEmployee: any = 'Andrei';
  public changeEmployee = (): void => {
    this.newEmployee = 1;
  }
  names: WritableSignal<string[]> = signal(['Liana', 'Viorel', 'Marius', 'Lucian', 'Mihai', 'Vali'], { equal: this.isStringFunction });

  public addEmployee = (): void => {
    this.names.update((names) => [...names, this.newEmployee]);
  }

  public isStringFunction(): boolean {
    return !(typeof this.newEmployee === 'string');
  }
}