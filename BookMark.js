const mongoose = require('mongoose');
const BookMark = require('./models/BookMark');

mongoose.connect('mongodb://localhost:27017/mongsh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

// Example use
const saveBookmark = async () => {
  const newBookmark = new BookMark({
    bookMark_id: 'bm001',
    user_id: '660fabc123...',  // replace with real ObjectId
    faq_id: '660fade234...',
  });
  await newBookmark.save();
};

saveBookmark();
