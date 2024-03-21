import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Services
import { CookieService } from 'ngx-cookie-service';

// Directives
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSeparatorDirective } from 'libs/ui/ui-separator-helm/src';

@Component({
  selector: 'spartan-cookies',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective, HlmSeparatorDirective],
  templateUrl: './cookies.component.html',
})
export class CookiesComponent {
  cookieValue: string = '';
  checkCookieValue: boolean = false;

  constructor(private cookieService: CookieService) { }

  setCookie = (): void => {
    this.cookieService.set('maliakademy', 'Hello World');
    this.cookieService.set('alexunmister', 'Salut');
  }

  getCookie = (): void => {
    this.cookieValue = this.cookieService.get('maliakademy');
  }

  getAllCookies = (): void => {
    const allCookies = this.cookieService.getAll();
    console.log('allCookies -> ', allCookies);
  }

  checkCookie = (): void => {
    this.checkCookieValue = this.cookieService.check('maliakademy');
  }

  deleteCookie = (): void => {
    this.cookieService.delete('maliakademy');
    this.cookieValue = '';
    this.checkCookieValue = false;
  }

  deleteAllCookies = (): void => {
    this.cookieService.deleteAll();
  }
}
