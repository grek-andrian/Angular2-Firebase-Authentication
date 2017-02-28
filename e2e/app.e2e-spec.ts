import { NgauthPage } from './app.po';

describe('ngauth App', function() {
  let page: NgauthPage;

  beforeEach(() => {
    page = new NgauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
