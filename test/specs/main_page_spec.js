const expect = require("chai").expect;

const url_server = 'http://localhost:8001';

describe('Main Page', () => {

  it('Accede a pagina1', ()=> {
    browser.url(`${url_server}`);

    $('#a-to-page2').waitForDisplayed(3000);

    let bodyText = $('body').getText();
    expect(bodyText).to.include('Hi people');

    browser.pause(2000);

    $('#a-to-page2').click();

    $('#a-to-page1').waitForDisplayed(3000);

    bodyText = $('body').getText();
    expect(bodyText).to.include('Welcome to page 2');

    browser.pause(2000);
  });
});
