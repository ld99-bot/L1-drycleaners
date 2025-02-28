const User = require('../models/userModel');
const otpGenerator = require('otp-generator');

exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;
  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
  const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

  let user = await User.findOne({ mobile });
  if (!user) {
    user = new User({ mobile, otp, otpExpiry });
  } else {
    user.otp = otp;
    user.otpExpiry = otpExpiry;
  }

  await user.save();
  // Logic to send OTP via SMS should be implemented here

  res.status(200).json({ message: 'OTP sent successfully' });
};

exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;
  const user = await User.findOne({ mobile, otp, otpExpiry: { $gt: new Date() } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
  }

  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  res.status(200).json({ message: 'OTP verified successfully' });
};