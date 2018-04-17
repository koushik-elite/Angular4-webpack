import { Elite6Page } from './app.po';

describe('elite6 App', () => {
  let page: Elite6Page;

  beforeEach(() => {
    page = new Elite6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
