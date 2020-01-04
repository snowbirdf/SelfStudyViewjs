module.exports = {
  'ログイン': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .enterValue('input#email', 'foo@domain.com')
      .enterValue('input#password', '12345678')
      .click('form > .form-action > button')
      .waitForElementPresent('#app > p', 1000)
      .assert.urlEquals('http://localhost:8080/#/')
      .end()
  }
}
