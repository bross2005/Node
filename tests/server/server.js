const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({error: 'Page not found'})
});

app.get('/users', (req,res)=>{
    var user1 = {age:25, location: 'austin'};
    var user2 = {age:28, location: 'Texas'}
    res.send(user1)
})

app.listen(3000)
module.exports.app = app;