const jwt = require('jsonwebtoken');

// Use same secret as in login route
const JWT_SECRET = 'your_jwt_secret_here';

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
    req.user = decoded; // attach user data to the request
    next(); // pass control to the next handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = auth;
