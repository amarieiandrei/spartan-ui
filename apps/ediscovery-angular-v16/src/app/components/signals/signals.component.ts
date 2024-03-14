import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { HlmH2Directive } from 'libs/ui/ui-typography-helm/src';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

// Components

@Component({
  selector: 'spartan-signals',
  standalone: true,
  imports: [
    CommonModule,
    HlmH2Directive,
    HlmButtonDirective,
    HlmSeparatorDirective,
  ],
  templateUrl: './signals.component.html',
  styles: `
    .collapse.show {
      visibility: visible;
    }
  `
})
export class SignalsComponent {
  // Fields
  value: any = 'No value selected';
  setValue = (value: any): void => {
    this.value = value;
  }

  // Values
  obj: object = {
    ediscovery: 'ediscovery',
    reefexpress: 'reef-express'
  };

  // Signals
  signal: any = signal('No value selected');

  setSignalValue = (value: any): void => {
    this.signal.set(value);
  }

  updateSignalValue = (value: any): void => {
    switch (typeof value) {
      case 'string': {
        this.signal.update((signalValue: any) => signalValue + ' ' + signalValue);
        break;
      }
      case 'number': {
        this.signal.update((signalValue: any) => signalValue + 1);
        break;
      }
      case 'object': {
        if (this.value) {
          const rs1: string = this.generateRandomString();
          const rs2: string = this.generateRandomString();
          this.signal.update((signalValue: any) => signalValue[rs1] = rs2);
          // Gandeste-te ?
          this.setSignalValue(this.obj);
        } else {
          // Typeof Object, but value it is null
          this.signal.update((signalValue: any) => undefined);
        }
        break;
      }
      case 'boolean': {
        this.signal.update((signalValue: any) => !signalValue);
        break;
      }
      case 'undefined': {
        this.signal.update((signalValue: any) => null);
        break;
      }
    }
  }

  typeofSignal = (signal: Signal<any>): any => {
    return typeof signal;
  }

  private generateRandomString = (): string => {
    return (Math.random() + 1).toString(36).substring(7)
  }
}
