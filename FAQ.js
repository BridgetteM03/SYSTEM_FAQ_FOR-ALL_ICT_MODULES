const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  FAQ_id: {
    type: String,
    unique: true,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: false // It may be empty at first (before approval)
  },
  module_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Automatically update `updated_at` when document is modified
faqSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
