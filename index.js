require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');

const routerPublic = require('./app/routers/routerPublic.js');
const error404 = require('./app/middleware/404.js');

const PORT = process.env.PORT || 3000;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false } // car en http et pas https
  }));


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//------------------------------------
app.use(routerPublic);

app.use(error404);
//------------------------------------
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
