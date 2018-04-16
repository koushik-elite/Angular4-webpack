import { Sparta6Page } from './app.po';

describe('sparta6 App', () => {
  let page: Sparta6Page;

  beforeEach(() => {
    page = new Sparta6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
