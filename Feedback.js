const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  Feedback_id: {
    type: String,
    unique: true,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  faq_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FAQ',
    required: true
  },
  was_helpful: {
    type: Boolean,
    required: true
  },
  like_dislike: {
    type: String,
    enum: ['like', 'dislike'],
    required: true
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
