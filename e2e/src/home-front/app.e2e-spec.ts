import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "Last Five Days" message', () => {
    page.navigateTo();
    expect(page.getLastFiveDaysCardTitleText()).toEqual('The Last Five Days');
  });

  it('should display "Last Five Days" message after Job Searcher button clicked', () => {
    page.navigateTo();
    page.clickJobSearcherButton();
    expect(page.getLastFiveDaysCardTitleText()).toEqual('The Last Five Days');
  });

});
