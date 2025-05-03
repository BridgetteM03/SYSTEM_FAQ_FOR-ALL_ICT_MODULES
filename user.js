const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // ← Step 1: import bcrypt

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'tutor', 'admin'],
    default: 'student',
    required: true
  }
});

// 🔐 Step 2: Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Skip if not modified
  this.password = await bcrypt.hash(this.password, 10); // Hash the password
  next(); // Continue saving
});

// ✅ Step 3: Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
