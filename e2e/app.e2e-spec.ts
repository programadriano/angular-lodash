import { AngularLodashPage } from './app.po';

describe('angular-lodash App', () => {
  let page: AngularLodashPage;

  beforeEach(() => {
    page = new AngularLodashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
