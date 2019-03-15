import { EmployerListPage } from './employer-list.po';

describe('workspace-project App', () => {
  let employerListPage: EmployerListPage;

  beforeAll(() => {
    employerListPage = new EmployerListPage();
    employerListPage.navigateTo();
  });


  it('should display "Employers:" page label', () => {
    expect(employerListPage.getPageLabelText()).toEqual('Employers:');
  });

});
