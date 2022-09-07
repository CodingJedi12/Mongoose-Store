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
    products.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts,
        })
    })
})
//New
app.get('/products/new', (req, res) => {
    res.render('new.ejs')
});
//D
//U
//Create
app.post('/products', (req, res) => {
    const newItem = {
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        price: req.body.price,
        qty: req.body.qty,
    }
    products.create(newItem, (error, createdItem) =>{
        res.redirect('/products')
    })
});
//Edit
app.get('/products/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        productId: req.params.id
    })
    });
//Show
app.get('/products/:id', (req, res) => {
    products.findById(req.params.id, (err, foundItem) => {
        res.render('show.ejs', {
            product: foundItem,
            productId: req.params.id,
        })
    })
});

//==================
//CAN YOU HEARRRR MEEE
//==================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`we are live at ${PORT}`))

//fix edit button
//create update controller
//add buy button