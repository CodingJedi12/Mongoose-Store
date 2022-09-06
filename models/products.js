const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
})