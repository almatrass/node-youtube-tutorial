module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/profiles', (req, res) => {
    let query = req.query;
    
    res.render('profiles', {
      user: query
    });
  });
}