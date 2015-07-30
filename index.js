const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.get('/', function (req, res) {
  res.render('index.html');
});

const server = app.listen(4040, '0.0.0.0', function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`listening at http://${host}:${port}`);
});