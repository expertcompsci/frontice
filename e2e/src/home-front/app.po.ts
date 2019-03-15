import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLastFiveDaysCardTitleText() {
    return element(by.css('mat-card-title')).getText();
  }

  clickJobSearcherButton() {
    element(by.css('button[routerlink="/home-front"]')).click();
  }

  clickJobSearchMenuButton() {
    element(by.css('app-menu-job-search button')).click();
  }
  
  clickEmployerListMenuButton() {
    element(by.css('app-menu-job-search button[routerlink="/employer-list"]')).click();
  }

}
