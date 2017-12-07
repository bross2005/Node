const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname + '/views/partials')
app.set('view_engine', 'hbs');


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append')
        };
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// });

app.use(express.static(__dirname + '/public'));

app.get('/projects', (req,res) => {
    res.render('home.hbs', {
        bodyShit: 'new body',
        otherShit: 'otherShit'
    });
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'home Page',
        local: 'host rabotaet on 3000 port'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentyear: new Date().getFullYear()
    })
});

app.listen(port, () => {
console.log(`port is ${port}`)
});