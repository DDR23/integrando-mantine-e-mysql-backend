function routes(app){
  app.use('/', require('./routes/index'));
  app.use('/data', require('./routes/getData'));
  app.use('/data', require('./routes/getOneData'));
  app.use('/data', require('./routes/postData'));
  app.use('/data', require('./routes/putData'));
  app.use('/data', require('./routes/deleteData'));
}

module.exports = routes;