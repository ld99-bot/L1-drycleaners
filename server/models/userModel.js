const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobile: { type: String, required: true, unique: true },
  otp: String,
  otpExpiry: Date
});

module.exports = mongoose.model('User', userSchema);