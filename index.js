const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use(bodyParser.urlencoded({
  extended:true,
}));
app.use(bodyParser.json());

routes(app);

app.listen('3222', function(){
  console.log('running server on port 3222')
})