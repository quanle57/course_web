const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')


const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db');

// Test to Database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//  http logger
// app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({extname: ".hbs"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log('=======================')

//  Routes Init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});