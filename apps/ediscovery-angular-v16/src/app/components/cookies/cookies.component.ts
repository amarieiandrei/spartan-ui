import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
@Component({
  selector: 'spartan-cookies',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective],
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
