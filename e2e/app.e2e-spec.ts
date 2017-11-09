import { MusicplayPage } from './app.po';

describe('musicplay App', function() {
  let page: MusicplayPage;

  beforeEach(() => {
    page = new MusicplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
