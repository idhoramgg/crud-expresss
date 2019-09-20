const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./routes/routes');
const cors = require('cors');


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
  extended:true,
}));
app.use(bodyParser.json());

app.use('/', indexRouter)


app.listen( PORT, function(){
  console.log(`running server on port ${PORT}`)
})