// .env
require('dotenv').config();

// module express
const express = require('express');
const app = express();
const session = require('express-session');

// middleware
const error404 = require('./app/middleware/404.js');

//port d'écoute
const PORT = process.env.PORT || 3000;

// router
const routerPublic = require('./app/routers/routerPublic.js');

// ejs
app.set('views', './app/views');
app.set('view engine', 'ejs');


app.use(express.static('public')); // fichiers statique
app.use(express.urlencoded({ extended: true }));  // Lecture du payload
app.use(session({   // express session
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

//--------------Routes----------------
app.use(routerPublic);

app.use(error404);
//------------------------------------
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
