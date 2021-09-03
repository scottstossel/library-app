const mongoose = require('mongoose');

const BookSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    pages: Number,
    genre: String
  }
);

module.exports = mongoose.model('Book', BookSchema)