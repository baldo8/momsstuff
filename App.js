const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use('/', require('./routes'))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("appIndex")
})

//app.use('/', require('./routes'));

// const PORT = 4000;
app.listen(3000)