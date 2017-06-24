import { GiphydemoPage } from './app.po';

describe('giphydemo App', () => {
  let page: GiphydemoPage;

  beforeEach(() => {
    page = new GiphydemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
