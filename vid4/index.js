const express = require('express'),
      handlebars = require('express-handlebars'),
      routes = require('./routes');

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

routes(app);