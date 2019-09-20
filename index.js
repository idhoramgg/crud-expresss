const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');


const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended:true,
}));
app.use(bodyParser.json());

app.use(cors());

routes(app);

app.listen( PORT, function(){
  console.log(`running server on port ${PORT}`)
})