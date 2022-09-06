//==================
//DEPENDENCIES
//==================
const express = require('express');
const app = express();
const mongoose = require('mongoose');
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
app.get('/home', (req, res) => {
    res.send("home page")
})
//N
//D
//U
//C
//E
//S

//==================
//CAN YOU HEARRRR MEEE
//==================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`we are live at ${PORT}`))