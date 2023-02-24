require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routerPublic = require('./app/routers/routerPublic.js');
const error404 = require('./app/middleware/404.js');


const PORT = process.env.PORT || 3000;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//------------------------------------
app.use(routerPublic);

app.use(error404);
//------------------------------------
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
