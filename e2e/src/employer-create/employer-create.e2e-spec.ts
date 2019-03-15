import { EmployerCreatePage } from './employer-create.po';

describe('workspace-project App', () => {
  let employerListPage: EmployerCreatePage;

  beforeEach(() => {
    employerListPage = new EmployerCreatePage();
  });

  it('should display "Enter Employer" page label', () => {
    employerListPage.navigateTo();
    expect(employerListPage.getPageLabelText()).toEqual('Enter Employer:');
  });

});
