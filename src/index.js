
const express = require('express');
const path = require('path');
const app = express();


//settings
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// middlewares

//routes
app.use(require('./routes/index.js'));



//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
