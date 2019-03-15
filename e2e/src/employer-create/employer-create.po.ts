import { browser, by, element } from 'protractor';

export class EmployerCreatePage {
  navigateTo() {
    return browser.get('/employer-create');
  }

  getPageLabelText() {
    return element(by.css('mat-card-title')).getText();
  }

}
