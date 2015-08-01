const assert = require('assert');

const webdriverio = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'firefox'
  }
})

console.log('Testing page title = Starter Template - Materialize')

webdriverio
  .init()
  .url('http://0.0.0.0:4040')
  .title(function(err, res) {
    assert("Starter Template - Materialize", res.value)
  })
  .end();