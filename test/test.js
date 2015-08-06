const expect = require('chai').expect;
const webdriverio = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'firefox'
  }
})


describe('Page title', function () {
  this.timeout(800);

  it('should have the correct page title', function (done) {
    webdriverio
      .init()
      .url('http://0.0.0.0:3030')
      .title(function (err, res) {
        expect(res.value).to.equal('Starter Template - Materialize');
        done();
      })
      .end();
  });
});
