// Modules
import { CommonModule } from '@angular/common';

// Components
import { Component, Input, WritableSignal, computed, signal } from '@angular/core';
import { HlmIconComponent } from 'libs/ui/ui-icon-helm/src';

// Directives
import { HlmAlertDirective, HlmAlertTitleDirective, HlmAlertDescriptionDirective } from 'libs/ui/ui-alert-helm/src';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

// Providers & Icons
import { provideIcons } from '@ng-icons/core';
import { lucideAlertTriangle, lucideCheckCircle } from '@ng-icons/lucide';

@Component({
  selector: 'spartan-generic-accordion',
  standalone: true,
  imports: [CommonModule, HlmIconComponent, HlmButtonDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertTitleDirective],
  providers: [provideIcons({ lucideAlertTriangle, lucideCheckCircle })],
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
  newEmployee: WritableSignal<any> = signal('Andrei');
  public changeEmployee = (): void => {
    this.newEmployee() === 'Andrei' ? this.newEmployee.set(1) : this.newEmployee.set('Andrei');
  }

  names: WritableSignal<string[]> = signal(
    ['Liana', 'Viorel', 'Marius', 'Lucian', 'Mihai', 'Vali'],
    {
      equal: (previousValue: string[], currentValue: string[]) => {
        return this.isStringFunction(currentValue[currentValue.length - 1]);
      }
    }
  );

  // Alerts
  alert: boolean = false;
  successAlert: boolean = false;
  alertsLogic = (): void => {
    this.alert = this.newEmployee() === 'Andrei' ? false : true;
    this.successAlert = this.newEmployee() === 'Andrei' ? true : false;
  }

  public addEmployee = (): void => {
    this.names.update((names) => [...names, this.newEmployee()]);

    // Alerts
    this.alertsLogic();
  }

  public isStringFunction(employee: any): any {
    return !(typeof this.newEmployee() === 'string');
  }
}