//==================
//DEPENDENCIES
//==================
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const products = require('./models/products.js')
require('dotenv').config();

//==================
//MIDDLEWARE
//==================
app.use(express.urlencoded({extended: false}));

//==================
//DATABASE CONNECTION
//==================
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//==================
//CONNECTION ERROR/SUCCESS
//==================
const db = mongoose.connection
db.on('error', (err) => console.log(err + "is mongo not running?"))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

//==================
//ROUTES
//==================

//Index
app.get('/products', (req, res) => {
    res.send("home page")
});
//New
app.get('/products/new', (req, res) => {
    res.send("created new")
});
//D
//U
//Create
app.post('/products', (req, res) => {
    res.send('received')
    res.redirect('/products')
});
//Edit
app.get('/products/:id/edit', (req, res) => {
    res.send('edit page')
});
//Show
app.get('/products/:id', (req, res) => {
    res.send('show page')
});

//==================
//CAN YOU HEARRRR MEEE
//==================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`we are live at ${PORT}`))