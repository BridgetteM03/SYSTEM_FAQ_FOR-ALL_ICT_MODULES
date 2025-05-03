const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  module_id: {
    type: String,
    unique: true,
    required: true
  },
  faq_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FAQ',
    required: true
  },
  module_name: {
    type: String,
    required: true
  },
  module_code: {
    type: String,
    required: true
  }
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
