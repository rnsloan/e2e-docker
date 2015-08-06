const expect = require('chai').expect;
const webdriverio = require('webdriverio');

describe('Test', function () {
  this.timeout(8000);

  before(function(done) {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
    client.init(done)
  });

  after(function(done) {
    client.end(done);
  });

  it('should have the correct page title', function (done) {
    client
      .url('http://0.0.0.0:3030')
      .title(function (err, res) {
        expect(res.value).to.equal('Starter Template - Materialize');
      })
      .call(done);
  });

  it('shows the responsive menu only at smaller viewports', function (done) {
    client
      .url('http://0.0.0.0:3030')
      .isVisible('.button-collapse').then(function(isVisible) {
        expect(isVisible).to.be.false;
      })
      .windowHandleSize({width: 800, height: 600})
      .isVisible('.button-collapse').then(function(isVisible) {
        expect(isVisible).to.be.true;
      })
      .call(done);
  });
});
