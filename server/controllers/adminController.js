const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { adminId, password } = req.body;
  const admin = await Admin.findOne({ adminId });

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ message: 'Invalid admin ID or password' });
  }

  // Generate and send token logic should be implemented here

  res.status(200).json({ message: 'Login successful' });
};

// Create admin for testing
const createAdmin = async () => {
  const existingAdmin = await Admin.findOne({ adminId: 'admin123' });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('Admin@123', 10);
    const newAdmin = new Admin({ adminId: 'admin123', password: hashedPassword });
    await newAdmin.save();
    console.log('Admin created for testing');
  }
};

createAdmin();