import { AngularAttackPage } from './app.po';

describe('angular-attack App', () => {
  let page: AngularAttackPage;

  beforeEach(() => {
    page = new AngularAttackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
