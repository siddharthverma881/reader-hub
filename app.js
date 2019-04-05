const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine' , 'hbs');
app.use(express.static(__dirname + '/public'));

/*app.get('/' , (req,res) => {
    res.render('help.hbs');
});
app.get('/about' , (req,res) => {
    res.render('about.hbs');
});*/
app.get('/' , (req,res) => {
    res.render('index.hbs');
})
app.get('/blog' , (req,res) => {
    res.render('blog.hbs');
})
app.get('/contact' , (req,res) => {
    res.render('contact.hbs');
})
app.get('/feature' , (req,res) => {
    res.render('feature.hbs');
})
app.get('/portfolio' , (req,res) => {
    res.render('portfolio.hbs');
})

app.listen(3000);