const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended:true,
}));
app.use(bodyParser.json());

routes(app);

app.listen( PORT, function(){
  console.log(`running server on port ${PORT}`)
})