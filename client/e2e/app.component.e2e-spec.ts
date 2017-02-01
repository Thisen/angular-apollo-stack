import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    expect(subject).toEqual(true);
  });
});
