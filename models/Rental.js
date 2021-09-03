const mongoose = require('mongoose');

const RentalSchema = mongoose.Schema(
  {
    user: String,
    book: String
  }
);

module.exports = mongoose.model('Rental', UserSchema)