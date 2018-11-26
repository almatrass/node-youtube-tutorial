const express = require('express'),
      handlebars = require('express-handlebars');

const app = express();

const Handlebars = handlebars.create({
  extname: '.html',
  partialsDir: './views/partials',
  helpers: {
    getStatus: function(cond) {
      if (!cond)
        return 'no';
      return 'yes';
    }
  }
});

app.engine('html', Handlebars.engine);
app.set('view engine', 'html');
app.set('views', './views');

app.listen(3037);

app.get('/', (req, res) => {
  res.render('index', {
    hello: 'hey there',
    arr: [{hey: 1, hey2: 'hello'}, {hey: 2}, {hey: 3}],
    cond: false
  });
});
app.get('/profile', (req, res) => {
  res.render('profile');
});