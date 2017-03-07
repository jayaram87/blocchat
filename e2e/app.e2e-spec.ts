import { BlocchatPage } from './app.po';

describe('blocchat App', function() {
  let page: BlocchatPage;

  beforeEach(() => {
    page = new BlocchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
