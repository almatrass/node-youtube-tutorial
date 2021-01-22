const express = require('express'),
      fs = require('fs'),
      handlebars = require('express-handlebars');

const app = express();

const Handlebars = handlebars.create({
  extname: '.html',
  defaultLayout: null
});

app.engine('html', Handlebars.engine);
app.set('view engine', 'html');
app.set('views', './views');

app.listen(3037);

app.get('/', (req, res) => {
  res.render('index', {
    hello: 'hey there'
  });
});
