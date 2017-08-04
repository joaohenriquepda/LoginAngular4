import { LoginAngular4Page } from './app.po';

describe('login-angular4 App', () => {
  let page: LoginAngular4Page;

  beforeEach(() => {
    page = new LoginAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
