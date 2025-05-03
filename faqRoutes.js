const express = require('express');
const router = express.Router();
const auth = require('/middleware/auth'); // middleware to check JWT

// Example of a protected route
router.post('/submit', auth, (req, res) => {
  // req.user is populated by the auth middleware
  res.json({ message: `FAQ submitted by user ${req.user.user_id}` });
});

module.exports = router;
