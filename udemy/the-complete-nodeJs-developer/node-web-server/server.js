const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.PORT || 3000;

//Middleware is rendered defore everything and in order
app.use((req,res,next) => {
    res.render('maintnance.hbs');
});

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));
//register middleware
//next is when middleware is done
app.use((req, res, next) => {
    //Logging
    var now = new Date().toString();
    var log = `TIME -> ${now} METHOD-> ${req.method} URL-> ${req.url}`
    fs.appendFile('server.log', log + '\n');    
    next();
});

hbs.registerHelper('getCurrentYear', () => {

    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();        
});

app.get('/', (req, res) => {
    //res.send('<h1>Hy</h1>');
    res.render('home.hbs', {
        pageTitle: 'About page title',        
        message: 'This is the home page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page title',        
    });
});

app.get('/bad', (req,res) => {

    res.send({
        error: true,
        message: 'Bad thing'
    })
});

app.listen(port, () => {
    console.log('Server is up');
});