import { MongoBrowserPage } from './app.po';

describe('mongo-browser App', function() {
  let page: MongoBrowserPage;

  beforeEach(() => {
    page = new MongoBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
