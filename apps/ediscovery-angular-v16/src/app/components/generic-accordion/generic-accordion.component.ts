import { Component, Input, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spartan-generic-accordion',
  standalone: true,
  imports: [CommonModule],
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
  });
  @Input() sixthItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
  @Input() seventhItem: WritableSignal<any> = signal({
    question: 'Researching...',
    answer: 'Work in progress...',
  });
}
