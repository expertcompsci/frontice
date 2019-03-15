import { browser, by, element } from 'protractor';

export class EmployerListPage {
  navigateTo() {
    return browser.get('/employer-list');
  }

  getPageLabelText() {
    return element(by.css('mat-card-title')).getText();
  }

}
