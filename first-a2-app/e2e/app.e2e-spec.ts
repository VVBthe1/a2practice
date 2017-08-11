import { FirstA2AppPage } from './app.po';

describe('first-a2-app App', () => {
  let page: FirstA2AppPage;

  beforeEach(() => {
    page = new FirstA2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
